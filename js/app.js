// ==========================================
// APP.JS  Logique principale
// AtelierLO  Formation ARCHICAD
// ==========================================

// State
let currentUser = null;
let currentView = 'dashboard';
let currentDayId = null;
let formateurMode = false;
let userProgress = {};
let userNotes = {};
let userChecklist = {};
let userComments = {};
let userEvaluation = {};
let userPlanning = {};

// Timer state
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

// ==========================================
// AUTH
// ==========================================
function checkAuth() {
    const saved = localStorage.getItem('atelierlo_session');
    if (saved) {
        currentUser = JSON.parse(saved);
        showApp();
    }
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');
    const errorEl = document.getElementById('login-error');

    btn.disabled = true;
    btn.textContent = 'Connexion...';
    errorEl.classList.remove('show');

    try {
        const user = await firebaseLogin(email, password);
        currentUser = user;
        localStorage.setItem('atelierlo_session', JSON.stringify(user));
        showApp();
    } catch (err) {
        errorEl.textContent = err.message || 'Email ou mot de passe incorrect';
        errorEl.classList.add('show');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Se connecter';
    }
});

function handleLogout() {
    firebaseLogout();
    localStorage.removeItem('atelierlo_session');
    currentUser = null;
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('app-layout').classList.remove('active');
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('timer-widget').style.display = 'none';
}

// ==========================================
// PASSWORD RESET
// ==========================================
function showPasswordReset() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('password-reset-modal').style.display = 'block';
}

function hidePasswordReset() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('password-reset-modal').style.display = 'none';
}

async function handlePasswordReset() {
    const email = document.getElementById('reset-email').value;
    const errorEl = document.getElementById('reset-error');
    const successEl = document.getElementById('reset-success');
    errorEl.classList.remove('show');
    successEl.classList.remove('show');

    if (!email) {
        errorEl.textContent = 'Veuillez entrer votre email';
        errorEl.classList.add('show');
        return;
    }

    if (typeof USE_FIREBASE !== 'undefined' && USE_FIREBASE && typeof firebaseAuth !== 'undefined' && firebaseAuth) {
        try {
            await firebaseAuth.sendPasswordResetEmail(email);
            successEl.textContent = 'Un email de reinitialisation a ete envoye !';
            successEl.classList.add('show');
        } catch (err) {
            errorEl.textContent = err.message;
            errorEl.classList.add('show');
        }
    } else {
        successEl.textContent = 'Mode demo : utilisez les identifiants par defaut (formateur@atelierlo.fr / formation2026)';
        successEl.classList.add('show');
    }
}

// ==========================================
// DARK MODE
// ==========================================
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('atelierlo_dark', isDark);
    updateDarkModeIcons();
}

function updateDarkModeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const btn = document.getElementById('dark-mode-btn');
    if (btn) {
        const sunIcon = btn.querySelector('.icon-sun');
        const moonIcon = btn.querySelector('.icon-moon');
        if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
        if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
    }
}

// Init dark mode
if (localStorage.getItem('atelierlo_dark') === 'true') {
    document.documentElement.classList.add('dark');
}
setTimeout(updateDarkModeIcons, 0);

// ==========================================
// APP INIT
// ==========================================
async function showApp() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-layout').classList.add('active');

    // User info
    document.getElementById('user-display-name').textContent = currentUser.name;
    document.getElementById('user-role').textContent = currentUser.role === 'formateur' ? 'Formateur' : 'Apprenant(e)';
    document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();

    // Show formateur toggle if formateur
    if (currentUser.role === 'formateur') {
        document.getElementById('formateur-toggle').style.display = 'flex';
        document.getElementById('timer-widget').style.display = 'flex';
    }

    // Load data
    userProgress = await loadUserData(currentUser.uid, 'progress') || {};
    userNotes = await loadUserData(currentUser.uid, 'notes') || {};
    userChecklist = await loadUserData(currentUser.uid, 'checklist') || {};
    userComments = await loadUserData(currentUser.uid, 'comments') || {};
    userEvaluation = await loadUserData(currentUser.uid, 'evaluation') || {};
    userPlanning = await loadUserData(currentUser.uid, 'planning') || {};

    // Build sidebar
    buildSidebarProgramme();

    // Show dashboard
    navigateTo('dashboard');

    // Register SW
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function() {});
    }
}

// ==========================================
// SIDEBAR
// ==========================================
function buildSidebarProgramme() {
    const container = document.getElementById('sidebar-programme');
    let html = '';

    FORMATION_DATA.weeks.forEach(function(week) {
        const completedDays = week.days.filter(function(d) { return userProgress[d.id]; }).length;
        const totalDays = week.days.length;

        html += '<div class="week-group">';
        html += '<button class="nav-item week-toggle" onclick="toggleWeek(' + week.id + ')" aria-expanded="false" aria-controls="week-submenu-' + week.id + '">';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
        html += 'S' + week.id + '  ' + week.title;
        html += '<span class="nav-badge">' + completedDays + '/' + totalDays + '</span>';
        html += '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>';
        html += '</button>';
        html += '<div class="week-submenu" id="week-submenu-' + week.id + '" role="region">';
        week.days.forEach(function(day) {
            var dayLabel = day.title.length > 22 ? day.title.substring(0, 22) + '...' : day.title;
            html += '<div class="day-item ' + (userProgress[day.id] ? 'completed' : '') + ' ' + (currentDayId === day.id ? 'active' : '') + '" onclick="navigateToDay(' + day.id + ')" role="button" tabindex="0" onkeypress="if(event.key===\'Enter\')navigateToDay(' + day.id + ')">';
            html += '<span class="day-dot"></span>';
            html += '<span>J' + day.id + '  ' + dayLabel + '</span>';
            html += '</div>';
        });
        html += '</div></div>';
    });

    container.innerHTML = html;
}

function toggleWeek(weekId) {
    var submenu = document.getElementById('week-submenu-' + weekId);
    var toggle = submenu.previousElementSibling;
    submenu.classList.toggle('open');
    toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', submenu.classList.contains('open'));
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('active');
}

document.getElementById('sidebar-overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
});

// ==========================================
// NAVIGATION
// ==========================================
function navigateTo(view) {
    currentView = view;
    currentDayId = null;

    // Update nav
    document.querySelectorAll('.nav-item[data-view]').forEach(function(item) {
        item.classList.toggle('active', item.dataset.view === view);
    });

    // Update title
    var titles = {
        'dashboard': 'Dashboard',
        'shortcuts': 'Raccourcis clavier ARCHICAD',
        'resources': 'Ressources utiles',
        'notes': 'Mon carnet de notes',
        'calendar': 'Planning de formation',
        'evaluation': 'Evaluation des competences'
    };
    document.getElementById('content-title').textContent = titles[view] || 'Dashboard';

    // Render view
    switch(view) {
        case 'dashboard': renderDashboard(); break;
        case 'shortcuts': renderShortcuts(); break;
        case 'resources': renderResources(); break;
        case 'notes': renderNotes(); break;
        case 'calendar': renderCalendar(); break;
        case 'evaluation': renderEvaluation(); break;
    }

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');

    // Scroll to top
    document.getElementById('content-area').scrollTop = 0;
    window.scrollTo(0, 0);
}

function navigateToDay(dayId) {
    currentView = 'day';
    currentDayId = dayId;

    // Find day data
    var dayData = null;
    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) {
            if (day.id === dayId) dayData = day;
        });
    });

    if (!dayData) return;

    // Update nav
    document.querySelectorAll('.nav-item[data-view]').forEach(function(item) { item.classList.remove('active'); });
    document.querySelectorAll('.day-item').forEach(function(item) { item.classList.remove('active'); });

    // Open week submenu
    var weekSubmenu = document.getElementById('week-submenu-' + dayData.week);
    if (weekSubmenu) {
        weekSubmenu.classList.add('open');
        weekSubmenu.previousElementSibling.classList.add('open');
    }

    document.getElementById('content-title').textContent = 'Jour ' + dayId + '  ' + dayData.title;

    renderDay(dayData);

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');

    window.scrollTo(0, 0);
}

// ==========================================
// FORMATEUR MODE
// ==========================================
function toggleFormateurMode() {
    if (currentUser.role !== 'formateur') return;
    formateurMode = !formateurMode;

    var btn = document.getElementById('formateur-toggle');
    btn.classList.toggle('active', formateurMode);

    document.querySelectorAll('.formateur-section').forEach(function(section) {
        section.classList.toggle('visible', formateurMode);
    });
}

// ==========================================
// PROGRESS
// ==========================================
function getProgress() {
    var totalDays = FORMATION_DATA.totalDays;
    var completedDays = Object.keys(userProgress).filter(function(k) { return userProgress[k]; }).length;
    return Math.round((completedDays / totalDays) * 100);
}

function updateProgressUI() {
    var pct = getProgress();
    document.getElementById('progress-mini-fill').style.width = pct + '%';
    document.getElementById('progress-mini-text').textContent = pct + '%';
}

async function toggleDayComplete(dayId) {
    userProgress[dayId] = !userProgress[dayId];
    await saveUserData(currentUser.uid, 'progress', userProgress);
    updateProgressUI();
    buildSidebarProgramme();

    showToast(userProgress[dayId] ? 'Jour marque comme termine' : 'Jour remis en cours', 'success');

    if (currentView === 'day') {
        var btn = document.getElementById('complete-day-btn');
        if (btn) {
            if (userProgress[dayId]) {
                btn.classList.add('completed');
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg> Jour termine';
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg> Marquer comme termine';
            }
        }
    }
}

async function toggleChecklistItem(dayId, index) {
    if (!userChecklist[dayId]) userChecklist[dayId] = {};
    userChecklist[dayId][index] = !userChecklist[dayId][index];
    await saveUserData(currentUser.uid, 'checklist', userChecklist);

    var li = document.querySelector('[data-checklist="' + dayId + '-' + index + '"]');
    if (li) li.classList.toggle('checked', userChecklist[dayId][index]);
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type) {
    type = type || 'info';
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 3000);
}

// ==========================================
// SESSION TIMER
// ==========================================
function toggleTimer() {
    timerRunning = !timerRunning;
    var toggleBtn = document.getElementById('timer-toggle-btn');

    if (timerRunning) {
        timerInterval = setInterval(function() {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        toggleBtn.querySelector('.play-icon').style.display = 'none';
        toggleBtn.querySelector('.pause-icon').style.display = 'block';
    } else {
        clearInterval(timerInterval);
        toggleBtn.querySelector('.play-icon').style.display = 'block';
        toggleBtn.querySelector('.pause-icon').style.display = 'none';
    }
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    var toggleBtn = document.getElementById('timer-toggle-btn');
    toggleBtn.querySelector('.play-icon').style.display = 'block';
    toggleBtn.querySelector('.pause-icon').style.display = 'none';
}

function updateTimerDisplay() {
    var h = Math.floor(timerSeconds / 3600);
    var m = Math.floor((timerSeconds % 3600) / 60);
    var s = timerSeconds % 60;
    document.getElementById('timer-display').textContent =
        String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}

// ==========================================
// GLOBAL SEARCH
// ==========================================
function toggleGlobalSearch() {
    var overlay = document.getElementById('search-overlay');
    if (overlay.style.display === 'none' || !overlay.style.display) {
        overlay.style.display = 'flex';
        var input = document.getElementById('global-search-input');
        input.value = '';
        input.focus();
        document.getElementById('search-results').innerHTML = '<div class="search-no-results">Commencez a taper pour rechercher...</div>';
    } else {
        overlay.style.display = 'none';
    }
}

// Keyboard shortcut: Ctrl+K
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleGlobalSearch();
    }
    if (e.key === 'Escape') {
        document.getElementById('search-overlay').style.display = 'none';
    }
});

document.getElementById('search-overlay').addEventListener('click', function(e) {
    if (e.target === document.getElementById('search-overlay')) {
        document.getElementById('search-overlay').style.display = 'none';
    }
});

document.getElementById('global-search-input').addEventListener('input', function(e) {
    performGlobalSearch(e.target.value);
});

function performGlobalSearch(query) {
    var resultsEl = document.getElementById('search-results');
    if (!query || query.length < 2) {
        resultsEl.innerHTML = '<div class="search-no-results">Tapez au moins 2 caracteres...</div>';
        return;
    }

    var q = query.toLowerCase();
    var results = [];

    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) {
            var searchableTexts = [
                { text: day.title, type: 'Titre' },
                { text: day.subtitle, type: 'Sous-titre' }
            ];
            day.objectives.forEach(function(o) { searchableTexts.push({ text: o, type: 'Objectif' }); });
            day.keyPoints.forEach(function(kp) { searchableTexts.push({ text: kp.title + ' ' + kp.content, type: 'Point cle' }); });
            searchableTexts.push({ text: day.exercise.title + ' ' + day.exercise.description, type: 'Exercice' });
            day.checklist.forEach(function(c) { searchableTexts.push({ text: c, type: 'Checklist' }); });

            searchableTexts.forEach(function(item) {
                if (item.text.toLowerCase().includes(q)) {
                    results.push({
                        dayId: day.id,
                        dayTitle: day.title,
                        text: item.text,
                        type: item.type
                    });
                }
            });
        });
    });

    if (results.length === 0) {
        resultsEl.innerHTML = '<div class="search-no-results">Aucun resultat trouve</div>';
        return;
    }

    var limited = results.slice(0, 20);
    resultsEl.innerHTML = limited.map(function(r) {
        var highlighted = r.text.length > 120 ? highlightMatch(r.text.substring(0, 120) + '...', query) : highlightMatch(r.text, query);
        return '<div class="search-result-item" onclick="document.getElementById(\'search-overlay\').style.display=\'none\'; navigateToDay(' + r.dayId + ')">' +
            '<span class="search-result-day">J' + r.dayId + '</span>' +
            '<span class="search-result-text">' + highlighted + '</span>' +
            '</div>';
    }).join('');
}

function highlightMatch(text, query) {
    var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// ==========================================
// RENDER: DASHBOARD
// ==========================================
function renderDashboard() {
    updateProgressUI();
    var pct = getProgress();
    var completedCount = Object.keys(userProgress).filter(function(k) { return userProgress[k]; }).length;
    var currentDay = completedCount + 1;

    // Formateur enhanced dashboard
    var formateurPanel = '';
    if (currentUser.role === 'formateur') {
        var checklistTotal = 0;
        Object.keys(userChecklist).forEach(function(dk) {
            Object.keys(userChecklist[dk]).forEach(function(ik) {
                if (userChecklist[dk][ik]) checklistTotal++;
            });
        });
        var totalChecklistItems = 0;
        FORMATION_DATA.weeks.forEach(function(w) {
            w.days.forEach(function(d) { totalChecklistItems += d.checklist.length; });
        });
        var notesCount = Object.keys(userNotes).filter(function(k) { return userNotes[k] && userNotes[k].length > 0; }).length;
        var evalCount = Object.keys(userEvaluation).filter(function(k) { return userEvaluation[k]; }).length;

        formateurPanel = '<div class="dashboard-formateur-panel">' +
            '<h3><span class="formateur-badge">Formateur</span> Vue d\'ensemble pedagogique</h3>' +
            '<div class="stats-mini-grid">' +
            '<div class="stat-mini-card"><div class="stat-mini-num">' + completedCount + '/20</div><div class="stat-mini-label">Jours termines</div></div>' +
            '<div class="stat-mini-card"><div class="stat-mini-num">' + checklistTotal + '/' + totalChecklistItems + '</div><div class="stat-mini-label">Acquis valides</div></div>' +
            '<div class="stat-mini-card"><div class="stat-mini-num">' + notesCount + '</div><div class="stat-mini-label">Notes redigees</div></div>' +
            '<div class="stat-mini-card"><div class="stat-mini-num">' + evalCount + '</div><div class="stat-mini-label">Competences evaluees</div></div>' +
            '<div class="stat-mini-card"><div class="stat-mini-num">' + formatTimerDuration(timerSeconds) + '</div><div class="stat-mini-label">Temps session</div></div>' +
            '</div></div>';
    }

    var html = '<div class="dashboard-welcome">' +
        '<h1>Bonjour ' + currentUser.name + ' &#128075;</h1>' +
        '<p>Bienvenue sur votre espace de formation ARCHICAD.</p>' +
        '</div>';

    // Export buttons
    html += '<div class="export-actions">' +
        '<button class="export-btn" onclick="exportProgressPDF()">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
        'Exporter progression (PDF)</button>';
    if (pct === 100) {
        html += '<button class="export-btn" onclick="generateCertificate()" style="border-color:rgba(34,197,94,0.3);color:var(--success);">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>' +
            'Generer attestation</button>';
    }
    html += '</div>';

    html += formateurPanel;

    html += '<div class="progress-card">' +
        '<div class="progress-header"><h3>Progression globale</h3><span class="progress-percentage">' + pct + '%</span></div>' +
        '<div class="progress-bar-large"><div class="progress-fill-large" style="width:' + pct + '%"></div></div>' +
        '<div class="progress-stats">' +
        '<div class="progress-stat"><span class="progress-stat-dot completed"></span><span>' + completedCount + ' jour' + (completedCount > 1 ? 's' : '') + ' termine' + (completedCount > 1 ? 's' : '') + '</span></div>' +
        '<div class="progress-stat"><span class="progress-stat-dot current"></span><span>Jour ' + Math.min(currentDay, 20) + ' en cours</span></div>' +
        '<div class="progress-stat"><span class="progress-stat-dot remaining"></span><span>' + (20 - completedCount) + ' jour' + ((20 - completedCount) > 1 ? 's' : '') + ' restant' + ((20 - completedCount) > 1 ? 's' : '') + '</span></div>' +
        '</div></div>';

    html += '<div class="dashboard-grid">' +
        '<div class="dash-card" onclick="navigateToDay(' + Math.min(currentDay, 20) + ')" role="button" tabindex="0">' +
        '<div class="dash-card-header"><div class="dash-card-icon">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>' +
        '<div><h3>Continuer la formation</h3><p>Jour ' + Math.min(currentDay, 20) + '  ' + getDayTitle(Math.min(currentDay, 20)) + '</p></div></div></div>' +

        '<div class="dash-card" onclick="navigateTo(\'shortcuts\')" role="button" tabindex="0">' +
        '<div class="dash-card-header"><div class="dash-card-icon yellow">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h8"/></svg></div>' +
        '<div><h3>Raccourcis clavier</h3><p>Tous les raccourcis ARCHICAD essentiels</p></div></div></div>' +

        '<div class="dash-card" onclick="navigateTo(\'calendar\')" role="button" tabindex="0">' +
        '<div class="dash-card-header"><div class="dash-card-icon green">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>' +
        '<div><h3>Planning</h3><p>Calendrier et planification des seances</p></div></div></div>' +

        '<div class="dash-card" onclick="navigateTo(\'notes\')" role="button" tabindex="0">' +
        '<div class="dash-card-header"><div class="dash-card-icon">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>' +
        '<div><h3>Mon carnet</h3><p>Notes personnelles et recaps de seances</p></div></div></div>' +
        '</div>';

    // Weeks overview
    html += '<div class="weeks-overview"><h2>Programme de formation</h2>';
    FORMATION_DATA.weeks.forEach(function(week) {
        var wCompletedDays = week.days.filter(function(d) { return userProgress[d.id]; }).length;
        html += '<div class="week-overview-card">' +
            '<div class="week-overview-header"><div class="week-overview-title"><span class="week-num">S' + week.id + '</span><h3>' + week.title + '</h3></div>' +
            '<span class="week-overview-progress">' + wCompletedDays + '/' + week.days.length + ' jours</span></div>' +
            '<div class="week-days-grid">';
        week.days.forEach(function(day) {
            var miniLabel = day.title.length > 15 ? day.title.substring(0, 15) + '...' : day.title;
            var classes = 'week-day-mini';
            if (userProgress[day.id]) classes += ' completed';
            if (!userProgress[day.id] && day.id === Math.min(currentDay, 20)) classes += ' active-day';
            html += '<div class="' + classes + '" onclick="navigateToDay(' + day.id + ')" role="button" tabindex="0">' +
                '<div class="day-num">J' + day.id + '</div>' +
                '<div class="day-label">' + miniLabel + '</div></div>';
        });
        html += '</div></div>';
    });
    html += '</div>';

    document.getElementById('content-area').innerHTML = html;
}

function formatTimerDuration(seconds) {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return h + 'h' + String(m).padStart(2, '0');
    return m + 'min';
}

function getDayTitle(dayId) {
    var title = '';
    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) {
            if (day.id === dayId) title = day.title;
        });
    });
    return title;
}

// ==========================================
// RENDER: DAY VIEW
// ==========================================
function renderDay(day) {
    updateProgressUI();
    var isCompleted = userProgress[day.id] || false;
    var dayChecklist = userChecklist[day.id] || {};

    var html = '<div class="day-view active">';

    // Header
    html += '<div class="day-header">' +
        '<div class="day-breadcrumb"><span onclick="navigateTo(\'dashboard\')" style="cursor:pointer">Dashboard</span> / Semaine ' + day.week + ' / <span>Jour ' + day.id + '</span></div>' +
        '<h1>' + day.title + '</h1><p>' + day.subtitle + '</p>' +
        '<div class="day-meta">' +
        '<div class="day-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' + day.duration + '</div>' +
        '<div class="day-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>Semaine ' + day.week + '  Jour ' + day.id + '</div>' +
        '<div class="day-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' + (isCompleted ? 'Termine' : 'En cours') + '</div>' +
        '</div></div>';

    // Objectifs
    html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
        '<div class="section-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg></div>' +
        '<h3>Objectifs de la seance</h3>' +
        '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body open"><ul class="objectives-list">';
    day.objectives.forEach(function(obj) { html += '<li>' + obj + '</li>'; });
    html += '</ul></div></div>';

    // Points cles
    html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
        '<div class="section-icon yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>' +
        '<h3>Points cles a retenir</h3>' +
        '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body open"><div class="key-points">';
    day.keyPoints.forEach(function(kp) {
        html += '<div class="key-point"><h4>' + kp.title + '</h4><p>' + kp.content + '</p></div>';
    });
    html += '</div></div></div>';

    // Exercice
    html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
        '<div class="section-icon green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>' +
        '<h3>Exercice pratique</h3>' +
        '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body open"><div class="exercise-block">' +
        '<div class="exercise-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' + day.exercise.title + '</div>' +
        '<p class="exercise-description">' + day.exercise.description + '</p>' +
        '<ol class="exercise-steps">';
    day.exercise.steps.forEach(function(step) { html += '<li>' + step + '</li>'; });
    html += '</ol></div></div></div>';

    // Checklist
    html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
        '<div class="section-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>' +
        '<h3>Validation des acquis</h3>' +
        '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body open"><ul class="checklist">';
    day.checklist.forEach(function(item, i) {
        html += '<li class="' + (dayChecklist[i] ? 'checked' : '') + '" data-checklist="' + day.id + '-' + i + '" onclick="toggleChecklistItem(' + day.id + ', ' + i + ')" role="checkbox" aria-checked="' + (dayChecklist[i] ? 'true' : 'false') + '" tabindex="0">' +
            '<span class="check-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>' + item + '</li>';
    });
    html += '</ul></div></div>';

    // Comments section
    html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
        '<div class="section-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>' +
        '<h3>Echanges et commentaires</h3>' +
        '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body open"><div class="comments-section">' +
        '<div class="comments-list" id="comments-list-' + day.id + '">' + renderComments(day.id) + '</div>' +
        '<div class="comment-input-wrapper">' +
        '<input type="text" class="comment-input" id="comment-input-' + day.id + '" placeholder="Ajouter un commentaire..." onkeypress="if(event.key===\'Enter\')addComment(' + day.id + ')" aria-label="Ajouter un commentaire">' +
        '<button class="comment-send-btn" onclick="addComment(' + day.id + ')">Envoyer</button>' +
        '</div></div></div></div>';

    // Formateur section
    if (day.formateurGuide) {
        html += '<div class="formateur-section ' + (formateurMode ? 'visible' : '') + '">';
        html += renderDetailedModules(day.id);

        // Guide de seance
        html += '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
            '<div class="section-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>' +
            '<h3><span class="formateur-badge">Formateur</span> Deroule de la seance</h3>' +
            '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="day-section-body open"><div class="formateur-content">';

        // Intro
        html += '<div class="tip-block"><p><strong>Introduction :</strong> ' + day.formateurGuide.intro + '</p></div>';

        // Timing
        html += '<h4>Planning horaire</h4><div class="timing-grid">';
        day.formateurGuide.timing.forEach(function(t) {
            html += '<div class="script-block"><h5><span class="timing-badge">' + t.time + '</span></h5><p>' + t.content + '</p></div>';
        });
        html += '</div>';

        // Tips
        html += '<h4>Conseils pedagogiques</h4>';
        day.formateurGuide.tips.forEach(function(tip) {
            html += '<div class="tip-block"><p>' + tip + '</p></div>';
        });

        // Warnings
        html += '<h4>Points de vigilance</h4>';
        day.formateurGuide.warnings.forEach(function(w) {
            html += '<div class="warning-block"><p>' + w + '</p></div>';
        });

        // Exercise solution
        html += '<h4>Solution de l\'exercice</h4><div class="script-block"><p>' + day.formateurGuide.exerciseSolution + '</p></div>';
        html += '</div></div></div>';

        // FAQ
        html += renderDetailedFaq(day.id);

        // Transition
        html += renderDetailedTransition(day.id);

        // Formateur notes
        html += '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
            '<div class="section-icon purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>' +
            '<h3><span class="formateur-badge">Formateur</span> Mes notes personnelles</h3>' +
            '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="day-section-body open"><div class="formateur-content">' +
            '<textarea class="formateur-notes-area" id="formateur-note-' + day.id + '" placeholder="Notes personnelles sur cette seance..." onblur="saveFormateurNote(' + day.id + ')" aria-label="Notes du formateur">' + (userNotes['formateur_' + day.id] || '') + '</textarea>' +
            '</div></div></div>';

        html += '</div>';
    }

    // Navigation
    html += '<div class="day-navigation">';
    if (day.id > 1) {
        html += '<button class="day-nav-btn" onclick="navigateToDay(' + (day.id - 1) + ')" aria-label="Jour precedent">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Jour ' + (day.id - 1) + '</button>';
    } else {
        html += '<div></div>';
    }
    html += '<button class="complete-day-btn ' + (isCompleted ? 'completed' : '') + '" id="complete-day-btn" onclick="toggleDayComplete(' + day.id + ')" aria-label="' + (isCompleted ? 'Jour termine' : 'Marquer comme termine') + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg> ' + (isCompleted ? 'Jour termine' : 'Marquer comme termine') + '</button>';
    if (day.id < 20) {
        html += '<button class="day-nav-btn" onclick="navigateToDay(' + (day.id + 1) + ')" aria-label="Jour suivant">Jour ' + (day.id + 1) +
            ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>';
    } else {
        html += '<div></div>';
    }
    html += '</div>';

    html += '</div>';

    document.getElementById('content-area').innerHTML = html;
}

// ==========================================
// COMMENTS SYSTEM
// ==========================================
function renderComments(dayId) {
    var comments = userComments[dayId] || [];
    if (comments.length === 0) {
        return '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:16px">Aucun commentaire pour le moment</p>';
    }
    return comments.map(function(c) {
        return '<div class="comment-item">' +
            '<div class="comment-avatar ' + (c.role === 'formateur' ? 'formateur' : '') + '">' + (c.name ? c.name.charAt(0).toUpperCase() : '?') + '</div>' +
            '<div class="comment-body"><div class="comment-meta"><strong>' + c.name + '</strong><span>' + c.date + '</span></div>' +
            '<div class="comment-text">' + c.text + '</div></div></div>';
    }).join('');
}

async function addComment(dayId) {
    var input = document.getElementById('comment-input-' + dayId);
    var text = input.value.trim();
    if (!text) return;

    if (!userComments[dayId]) userComments[dayId] = [];

    var comment = {
        name: currentUser.name,
        role: currentUser.role,
        text: text,
        date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
    };

    userComments[dayId].push(comment);
    await saveUserData(currentUser.uid, 'comments', userComments);

    input.value = '';
    document.getElementById('comments-list-' + dayId).innerHTML = renderComments(dayId);
    showToast('Commentaire ajoute', 'success');
}

// ==========================================
// RENDER: CALENDAR / PLANNING
// ==========================================
function renderCalendar() {
    var completedCount = Object.keys(userProgress).filter(function(k) { return userProgress[k]; }).length;
    var currentDay = completedCount + 1;

    var html = '<div class="calendar-page">' +
        '<h1>Planning de formation</h1>' +
        '<p>Visualisez votre parcours de formation en un coup d\'oeil. Cliquez sur un jour pour y acceder.</p>' +
        '<div class="calendar-grid">';

    FORMATION_DATA.weeks.forEach(function(week) {
        html += '<div class="calendar-week-label">Semaine ' + week.id + '  ' + week.title + '</div>';
        week.days.forEach(function(day) {
            var isDone = userProgress[day.id];
            var isCurrent = !isDone && day.id === Math.min(currentDay, 20);
            var plannedDate = userPlanning[day.id] || '';
            var classes = 'calendar-day';
            if (isDone) classes += ' completed';
            if (isCurrent) classes += ' current';
            html += '<div class="' + classes + '" onclick="navigateToDay(' + day.id + ')">' +
                '<div class="calendar-day-num">J' + day.id + '</div>' +
                '<div class="calendar-day-title">' + day.title + '</div>';
            if (plannedDate) html += '<div class="calendar-day-status">' + plannedDate + '</div>';
            if (isDone) html += '<div class="calendar-day-status">Termine</div>';
            if (isCurrent) html += '<div class="calendar-day-status">En cours</div>';
            html += '<input type="date" class="calendar-date-input" value="' + plannedDate + '" onclick="event.stopPropagation()" onchange="setPlanningDate(' + day.id + ', this.value)" aria-label="Date planifiee pour le jour ' + day.id + '" style="margin-top:8px;width:100%">';
            html += '</div>';
        });
    });

    html += '</div></div>';
    document.getElementById('content-area').innerHTML = html;
}

async function setPlanningDate(dayId, date) {
    userPlanning[dayId] = date;
    await saveUserData(currentUser.uid, 'planning', userPlanning);
    showToast('Date planifiee', 'success');
}

// ==========================================
// RENDER: EVALUATION / COMPETENCY GRID
// ==========================================
function renderEvaluation() {
    var allSkills = [];
    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) {
            day.checklist.forEach(function(item, i) {
                allSkills.push({ dayId: day.id, weekId: week.id, index: i, label: item });
            });
        });
    });

    // Count evaluations
    var counts = { acquis: 0, encours: 0, nonacquis: 0, total: allSkills.length };
    allSkills.forEach(function(skill) {
        var val = userEvaluation[skill.dayId + '_' + skill.index];
        if (val === 'acquis') counts.acquis++;
        else if (val === 'encours') counts.encours++;
        else if (val === 'nonacquis') counts.nonacquis++;
    });

    var html = '<div class="evaluation-page">' +
        '<h1>Evaluation des competences</h1>' +
        '<p>Grille d\'evaluation par competence pour suivre l\'acquisition des savoir-faire.</p>' +
        '<div class="export-actions"><button class="export-btn" onclick="exportEvaluationPDF()">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
        'Exporter evaluation (PDF)</button></div>' +
        '<div class="eval-summary">' +
        '<div class="eval-summary-card"><div class="eval-summary-num" style="color:var(--success)">' + counts.acquis + '</div><div class="eval-summary-label">Acquis</div></div>' +
        '<div class="eval-summary-card"><div class="eval-summary-num" style="color:var(--warning)">' + counts.encours + '</div><div class="eval-summary-label">En cours</div></div>' +
        '<div class="eval-summary-card"><div class="eval-summary-num" style="color:var(--danger)">' + counts.nonacquis + '</div><div class="eval-summary-label">Non acquis</div></div>' +
        '</div>';

    FORMATION_DATA.weeks.forEach(function(week) {
        html += '<div class="eval-week"><h3><span>S' + week.id + '</span> ' + week.title + '</h3><div class="eval-grid">';
        week.days.forEach(function(day) {
            day.checklist.forEach(function(item, i) {
                var key = day.id + '_' + i;
                var current = userEvaluation[key] || '';
                html += '<div class="eval-item">' +
                    '<span class="eval-item-day">J' + day.id + '</span>' +
                    '<span class="eval-item-label">' + item + '</span>' +
                    '<div class="eval-level-btns">' +
                    '<button class="eval-level-btn level-acquis ' + (current === 'acquis' ? 'active' : '') + '" onclick="setEvaluation(\'' + key + '\', \'acquis\')">Acquis</button>' +
                    '<button class="eval-level-btn level-encours ' + (current === 'encours' ? 'active' : '') + '" onclick="setEvaluation(\'' + key + '\', \'encours\')">En cours</button>' +
                    '<button class="eval-level-btn level-nonacquis ' + (current === 'nonacquis' ? 'active' : '') + '" onclick="setEvaluation(\'' + key + '\', \'nonacquis\')">Non acquis</button>' +
                    '</div></div>';
            });
        });
        html += '</div></div>';
    });

    html += '</div>';
    document.getElementById('content-area').innerHTML = html;
}

async function setEvaluation(key, level) {
    if (userEvaluation[key] === level) {
        delete userEvaluation[key];
    } else {
        userEvaluation[key] = level;
    }
    await saveUserData(currentUser.uid, 'evaluation', userEvaluation);
    renderEvaluation();
}

// ==========================================
// PDF EXPORT
// ==========================================
function exportProgressPDF() {
    if (typeof window.jspdf === 'undefined') {
        showToast('Bibliotheque PDF non chargee', 'error');
        return;
    }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var primary = [0, 166, 200];
    var completedCount = Object.keys(userProgress).filter(function(k) { return userProgress[k]; }).length;
    var pct = getProgress();

    // Header
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text('AtelierLO  Formation ARCHICAD', 15, 20);
    doc.setFontSize(12);
    doc.text('Rapport de progression  ' + currentUser.name, 15, 32);

    // Date
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text('Genere le ' + new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }), 15, 50);

    // Progress
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text('Progression : ' + pct + '% (' + completedCount + '/20 jours)', 15, 62);

    // Progress bar
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(15, 66, 180, 8, 4, 4, 'F');
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.roundedRect(15, 66, 180 * (pct / 100), 8, 4, 4, 'F');

    // Days table
    var y = 84;
    doc.setFontSize(14);
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text('Detail par jour', 15, y);
    y += 10;

    FORMATION_DATA.weeks.forEach(function(week) {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        doc.text('Semaine ' + week.id + '  ' + week.title, 15, y);
        y += 8;

        week.days.forEach(function(day) {
            if (y > 270) { doc.addPage(); y = 20; }
            var status = userProgress[day.id] ? 'V' : 'o';
            doc.setFontSize(10);
            if (userProgress[day.id]) {
                doc.setTextColor(34, 197, 94);
            } else {
                doc.setTextColor(150, 150, 150);
            }
            doc.text(status, 20, y);
            doc.setTextColor(50, 50, 50);
            doc.text('Jour ' + day.id + '  ' + day.title, 28, y);
            y += 6;
        });
        y += 4;
    });

    doc.save('progression-archicad-' + currentUser.name + '.pdf');
    showToast('PDF exporte avec succes', 'success');
}

function exportEvaluationPDF() {
    if (typeof window.jspdf === 'undefined') {
        showToast('Bibliotheque PDF non chargee', 'error');
        return;
    }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var primary = [0, 166, 200];

    // Header
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text('Grille d\'evaluation', 15, 20);
    doc.setFontSize(12);
    doc.text(currentUser.name + '  Formation ARCHICAD', 15, 32);

    var y = 55;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Date : ' + new Date().toLocaleDateString('fr-FR'), 15, y);
    y += 12;

    FORMATION_DATA.weeks.forEach(function(week) {
        if (y > 250) { doc.addPage(); y = 20; }
        doc.setFontSize(12);
        doc.setTextColor(primary[0], primary[1], primary[2]);
        doc.text('S' + week.id + '  ' + week.title, 15, y);
        y += 8;

        week.days.forEach(function(day) {
            day.checklist.forEach(function(item, i) {
                if (y > 275) { doc.addPage(); y = 20; }
                var key = day.id + '_' + i;
                var level = userEvaluation[key] || '';
                var color;
                if (level === 'acquis') color = [34,197,94];
                else if (level === 'encours') color = [245,158,11];
                else if (level === 'nonacquis') color = [239,68,68];
                else color = [150,150,150];

                doc.setFontSize(9);
                doc.setTextColor(150, 150, 150);
                doc.text('J' + day.id, 18, y);
                doc.setTextColor(50, 50, 50);
                doc.text(item.substring(0, 70), 30, y);
                doc.setTextColor(color[0], color[1], color[2]);
                var labelText = level === 'acquis' ? 'Acquis' : level === 'encours' ? 'En cours' : level === 'nonacquis' ? 'Non acquis' : '';
                doc.text(labelText, 170, y);
                y += 5;
            });
        });
        y += 4;
    });

    doc.save('evaluation-archicad-' + currentUser.name + '.pdf');
    showToast('Evaluation PDF exportee', 'success');
}

function generateCertificate() {
    if (typeof window.jspdf === 'undefined') {
        showToast('Bibliotheque PDF non chargee', 'error');
        return;
    }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF('landscape');
    var primary = [0, 166, 200];
    var w = 297, h = 210;

    // Background border
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    doc.setLineWidth(3);
    doc.rect(10, 10, w - 20, h - 20);
    doc.setLineWidth(1);
    doc.rect(14, 14, w - 28, h - 28);

    // Header
    doc.setFontSize(14);
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text('AtelierLO', w / 2, 35, { align: 'center' });

    doc.setFontSize(32);
    doc.setTextColor(30, 30, 30);
    doc.text('ATTESTATION DE FORMATION', w / 2, 55, { align: 'center' });

    // Line
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    doc.setLineWidth(2);
    doc.line(w / 2 - 60, 62, w / 2 + 60, 62);

    // Body
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text('Nous certifions que', w / 2, 80, { align: 'center' });

    doc.setFontSize(28);
    doc.setTextColor(30, 30, 30);
    doc.text(currentUser.name, w / 2, 98, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text('a suivi avec succes la formation', w / 2, 115, { align: 'center' });

    doc.setFontSize(22);
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text('Formation ARCHICAD  20 jours', w / 2, 133, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Comprenant : Modelisation BIM, Documentation, Mise en page, Rendu 3D, Enscape & 3ds Max', w / 2, 148, { align: 'center' });

    // Footer
    var today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text('Delivre le ' + today, 60, 175);
    doc.text('Le formateur', w - 60, 175, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(30, 30, 30);
    doc.text('Lucien  AtelierLO', w - 60, 188, { align: 'center' });

    doc.save('attestation-archicad-' + currentUser.name + '.pdf');
    showToast('Attestation generee !', 'success');
}

// ==========================================
// RENDER: DETAILED FORMATEUR GUIDE HELPERS
// ==========================================
function renderDetailedModules(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.moduleExplanations || guide.moduleExplanations.length === 0) return '';

    var result = '';
    guide.moduleExplanations.forEach(function(mod, modIndex) {
        result += '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
            '<div class="section-icon formateur-module-icon"><span class="module-emoji">' + (mod.icon || '') + '</span></div>' +
            '<h3><span class="formateur-badge">Formateur</span> ' + mod.moduleTitle;
        if (mod.duration) result += ' <span class="module-duration">' + mod.duration + '</span>';
        result += '</h3><svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="day-section-body"><div class="formateur-content">';
        mod.detailedContent.forEach(function(item, itemIndex) {
            result += '<div class="detailed-module-item"><div class="detailed-module-header" onclick="toggleDetailedItem(this)">' +
                '<span class="detailed-module-number">' + (modIndex + 1) + '.' + (itemIndex + 1) + '</span>' +
                '<h4>' + item.subtitle + '</h4>' +
                '<svg class="chevron-toggle-mini open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg></div>' +
                '<div class="detailed-module-body open">';

            // Explanation
            result += '<div class="detailed-explanation"><div class="detailed-label">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' +
                'Explication pour le formateur</div><p>' + item.explanation + '</p></div>';

            // What to say
            if (item.whatToSay) {
                result += '<div class="detailed-whattosay"><div class="detailed-label speech">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
                    'Ce qu\'il faut dire a l\'apprenante</div><blockquote>' + item.whatToSay + '</blockquote></div>';
            }

            // Demo steps
            if (item.demoSteps && item.demoSteps.length > 0) {
                result += '<div class="detailed-demo"><div class="detailed-label demo">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' +
                    'Demonstration pas a pas</div><ol class="demo-steps-list">';
                item.demoSteps.forEach(function(step) { result += '<li>' + step + '</li>'; });
                result += '</ol></div>';
            }

            // Key message
            if (item.keyMessage) {
                result += '<div class="detailed-keymessage"><div class="detailed-label key">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' +
                    'Message cle a retenir</div><p class="key-message-text">' + item.keyMessage + '</p></div>';
            }

            result += '</div></div>';
        });
        result += '</div></div></div>';
    });
    return result;
}

function renderDetailedFaq(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.faq || guide.faq.length === 0) return '';

    var result = '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
        '<div class="section-icon formateur-faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>' +
        '<h3><span class="formateur-badge">Formateur</span> Questions frequentes de l\'apprenante</h3>' +
        '<svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body"><div class="formateur-content"><div class="faq-list">';

    guide.faq.forEach(function(item, i) {
        result += '<div class="faq-item" onclick="toggleFaqItem(this)">' +
            '<div class="faq-question"><span class="faq-q-label">Q' + (i + 1) + '</span><span>' + item.question + '</span>' +
            '<svg class="chevron-toggle-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="faq-answer"><span class="faq-a-label">R</span><p>' + item.answer + '</p></div></div>';
    });

    result += '</div></div></div></div>';
    return result;
}

function renderDetailedTransition(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.transitionToNextDay) return '';

    return '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
        '<div class="section-icon formateur-transition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>' +
        '<h3><span class="formateur-badge">Formateur</span> Transition vers le jour suivant</h3>' +
        '<svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body"><div class="formateur-content"><div class="transition-block">' +
        '<div class="detailed-label speech"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        'Ce qu\'il faut dire en fin de seance</div>' +
        '<blockquote>' + guide.transitionToNextDay + '</blockquote>' +
        '</div></div></div></div>';
}

function toggleDetailedItem(header) {
    var body = header.nextElementSibling;
    var chevron = header.querySelector('.chevron-toggle-mini');
    body.classList.toggle('open');
    if (chevron) chevron.classList.toggle('open');
}

function toggleFaqItem(faqItem) {
    faqItem.classList.toggle('open');
    var chevron = faqItem.querySelector('.chevron-toggle-mini');
    if (chevron) chevron.classList.toggle('open');
}

function toggleSection(header) {
    var body = header.nextElementSibling;
    var chevron = header.querySelector('.chevron-toggle');
    body.classList.toggle('open');
    chevron.classList.toggle('open');
    header.setAttribute('aria-expanded', body.classList.contains('open'));
}

async function saveFormateurNote(dayId) {
    var textarea = document.getElementById('formateur-note-' + dayId);
    if (textarea) {
        userNotes['formateur_' + dayId] = textarea.value;
        await saveUserData(currentUser.uid, 'notes', userNotes);
        showToast('Note sauvegardee', 'info');
    }
}

// ==========================================
// RENDER: SHORTCUTS
// ==========================================
function renderShortcuts() {
    var html = '<div class="shortcuts-page">' +
        '<h1>Raccourcis clavier ARCHICAD</h1>' +
        '<p>Les raccourcis essentiels pour travailler efficacement. Utilisez la recherche pour trouver rapidement un raccourci.</p>' +
        '<input type="text" class="shortcut-search" id="shortcut-search" placeholder="Rechercher un raccourci..." oninput="filterShortcuts(this.value)" aria-label="Rechercher un raccourci">' +
        '<div id="shortcuts-container">';

    SHORTCUTS_DATA.categories.forEach(function(cat) {
        html += '<div class="shortcut-category" data-category="' + cat.name + '"><h3>' + cat.name + '</h3><div class="shortcuts-grid">';
        cat.shortcuts.forEach(function(s) {
            html += '<div class="shortcut-item" data-search="' + s.label.toLowerCase() + ' ' + s.keys.join(' ').toLowerCase() + '">' +
                '<span class="shortcut-label">' + s.label + '</span><div class="shortcut-keys">';
            s.keys.forEach(function(k, ki) {
                if (ki > 0) html += '<span style="color:var(--text-muted);font-size:11px">+</span>';
                html += '<span class="key">' + k + '</span>';
            });
            html += '</div></div>';
        });
        html += '</div></div>';
    });

    html += '</div></div>';
    document.getElementById('content-area').innerHTML = html;
}

function filterShortcuts(query) {
    var q = query.toLowerCase();
    document.querySelectorAll('.shortcut-item').forEach(function(item) {
        var match = item.dataset.search.includes(q);
        item.style.display = match ? 'flex' : 'none';
    });
    document.querySelectorAll('.shortcut-category').forEach(function(cat) {
        var hasVisible = false;
        cat.querySelectorAll('.shortcut-item').forEach(function(item) {
            if (item.style.display !== 'none') hasVisible = true;
        });
        cat.style.display = hasVisible ? 'block' : 'none';
    });
}

// ==========================================
// RENDER: RESOURCES
// ==========================================
function renderResources() {
    var html = '<div class="resources-page">' +
        '<h1>Ressources utiles</h1>' +
        '<p>Liens et outils complementaires pour approfondir votre apprentissage d\'ARCHICAD.</p>';

    RESOURCES_DATA.forEach(function(cat) {
        html += '<div class="resource-category"><h3>' + cat.category + '</h3><div class="resources-list">';
        cat.items.forEach(function(item) {
            html += '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer" class="resource-item">' +
                '<div class="resource-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>' +
                '<div class="resource-info"><h4>' + item.title + '</h4><p>' + item.description + '</p></div>' +
                '<svg class="resource-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg></a>';
        });
        html += '</div></div>';
    });

    html += '</div>';
    document.getElementById('content-area').innerHTML = html;
}

// ==========================================
// RENDER: NOTES
// ==========================================
function renderNotes() {
    var allDays = [];
    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) { allDays.push(day); });
    });

    var html = '<div class="notes-page"><h1>Mon carnet de notes</h1>' +
        '<p>Prenez des notes pendant vos sessions de formation. Elles sont automatiquement sauvegardees.</p>';

    // General note
    html += '<div class="note-card" style="margin-bottom:32px;border-color:rgba(0,166,200,0.2);">' +
        '<div class="note-card-header"><h3>Notes generales</h3></div>' +
        '<textarea class="note-textarea" id="note-general" placeholder="Notes generales sur la formation..." oninput="autoSaveNote(\'general\')" aria-label="Notes generales">' + (userNotes['general'] || '') + '</textarea></div>';

    html += '<h2 style="font-family:\'Space Grotesk\',sans-serif;font-size:20px;font-weight:700;margin-bottom:16px;">Notes par seance</h2>';
    html += '<div class="notes-container">';

    allDays.forEach(function(day) {
        html += '<div class="note-card"><div class="note-card-header"><h3>Jour ' + day.id + '  ' + day.title + '</h3>' +
            '<span class="note-date">' + (userProgress[day.id] ? 'Termine' : '') + '</span></div>' +
            '<textarea class="note-textarea" id="note-day_' + day.id + '" placeholder="Mes notes pour le jour ' + day.id + '..." oninput="autoSaveNote(\'day_' + day.id + '\')" aria-label="Notes jour ' + day.id + '">' + (userNotes['day_' + day.id] || '') + '</textarea></div>';
    });

    html += '</div></div>';
    document.getElementById('content-area').innerHTML = html;
}

var saveTimeout = null;
function autoSaveNote(key) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async function() {
        var textarea = document.getElementById(key === 'general' ? 'note-general' : 'note-' + key);
        if (textarea) {
            userNotes[key] = textarea.value;
            await saveUserData(currentUser.uid, 'notes', userNotes);
        }
    }, 500);
}

// ==========================================
// INIT
// ==========================================
checkAuth();
