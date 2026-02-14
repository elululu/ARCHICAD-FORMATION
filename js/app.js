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
let userQuizScores = {};
let userTimeSpent = {};

// Timer state
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

// Day time tracking
let dayTimerInterval = null;
let dayTimerStart = null;

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
        var studentsBtn = document.getElementById('nav-students-btn');
        if (studentsBtn) studentsBtn.style.display = 'flex';
        // Hide badges & evaluation for formateur (student features)
        document.querySelectorAll('.nav-item[data-view="badges"], .nav-item[data-view="evaluation"]').forEach(function(btn) {
            btn.style.display = 'none';
        });
    }

    // Load data
    userProgress = await loadUserData(currentUser.uid, 'progress') || {};
    userNotes = await loadUserData(currentUser.uid, 'notes') || {};
    userChecklist = await loadUserData(currentUser.uid, 'checklist') || {};
    userComments = await loadUserData(currentUser.uid, 'comments') || {};
    userEvaluation = await loadUserData(currentUser.uid, 'evaluation') || {};
    userPlanning = await loadUserData(currentUser.uid, 'planning') || {};
    userQuizScores = await loadUserData(currentUser.uid, 'quizScores') || {};
    userTimeSpent = await loadUserData(currentUser.uid, 'timeSpent') || {};

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
        'evaluation': 'Evaluation des competences',
        'badges': 'Mes badges & trophees',
        'students': 'Gestion des apprenants'
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
        case 'badges': renderBadges(); break;
        case 'students': renderStudentsOverview(); break;
    }

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');

    // Scroll to top
    document.getElementById('content-area').scrollTop = 0;
    window.scrollTo(0, 0);
}

function navigateToDay(dayId) {
    stopDayTimer(); // Save time spent on previous day
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

    // Start day time tracking
    startDayTimer(dayId);

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

    // Check badges
    checkAndNotifyBadges();

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
        formateurPanel = '<div class="dashboard-formateur-panel">' +
            '<h3><span class="formateur-badge">Formateur</span> Gestion de la formation</h3>' +
            '<p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;">Gerez vos eleves, creez des comptes et suivez leur progression.</p>' +
            '<div class="formateur-quick-actions">' +
            '<button class="formateur-action-btn primary" onclick="navigateTo(\'students\')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' +
            ' Mes eleves</button>' +
            '<button class="formateur-action-btn" onclick="navigateTo(\'students\')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' +
            ' Inscrire un eleve</button>' +
            '<div class="stat-mini-card" style="min-width:120px"><div class="stat-mini-num">' + formatTimerDuration(timerSeconds) + '</div><div class="stat-mini-label">Temps session</div></div>' +
            '</div>' +
            '<div id="formateur-students-preview"></div>' +
            '</div>';
        // Load students preview async
        setTimeout(loadFormateurStudentsPreview, 100);
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

    // Badges preview on dashboard (apprenants only)
    if (typeof BADGES_DATA !== 'undefined' && currentUser.role !== 'formateur') {
        var unlockedBadges = BADGES_DATA.filter(function(b) { return b.condition(userProgress, userQuizScores); });
        html += '<div class="badges-dashboard-preview">' +
            '<div class="badges-preview-header"><h3>🏆 Mes badges</h3><span class="badges-count">' + unlockedBadges.length + '/' + BADGES_DATA.length + ' debloques</span>' +
            '<button class="badges-see-all" onclick="navigateTo(\'badges\')">Voir tout →</button></div>' +
            '<div class="badges-preview-grid">';
        BADGES_DATA.forEach(function(badge) {
            var unlocked = badge.condition(userProgress, userQuizScores);
            html += '<div class="badge-mini ' + (unlocked ? 'unlocked' : 'locked') + '" title="' + badge.description + '">' +
                '<span class="badge-mini-icon">' + badge.icon + '</span>' +
                '<span class="badge-mini-title">' + badge.title + '</span></div>';
        });
        html += '</div></div>';
    }

    // Time spent summary (apprenants only)
    var totalTimeSpent = Object.values(userTimeSpent).reduce(function(a, b) { return a + b; }, 0);
    if (totalTimeSpent > 0 && currentUser.role !== 'formateur') {
        html += '<div class="time-spent-dashboard">' +
            '<div class="time-spent-header"><h3>⏱ Temps d\'apprentissage</h3><span class="time-total">' + formatTimeSpent(totalTimeSpent) + ' au total</span></div>' +
            '<div class="time-spent-bars">';
        FORMATION_DATA.weeks.forEach(function(week) {
            week.days.forEach(function(day) {
                var t = userTimeSpent[day.id] || 0;
                if (t > 0) {
                    var maxTime = Math.max.apply(null, Object.values(userTimeSpent));
                    var barPct = maxTime > 0 ? Math.round((t / maxTime) * 100) : 0;
                    html += '<div class="time-bar-row"><span class="time-bar-label">J' + day.id + '</span>' +
                        '<div class="time-bar-track"><div class="time-bar-fill" style="width:' + barPct + '%"></div></div>' +
                        '<span class="time-bar-value">' + formatTimeSpent(t) + '</span></div>';
                }
            });
        });
        html += '</div></div>';
    }

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

    // Quiz section
    if (typeof QUIZ_DATA !== 'undefined' && QUIZ_DATA[day.id]) {
        var quizScore = userQuizScores[day.id];
        var quizLabel = quizScore !== undefined ? 'Score : ' + quizScore + '%' : 'Passer le quiz';
        var quizBtnClass = quizScore !== undefined ? (quizScore === 100 ? 'quiz-btn-perfect' : 'quiz-btn-done') : '';
        html += '<div class="day-section"><div class="day-section-header" onclick="toggleSection(this)" role="button" tabindex="0" aria-expanded="true">' +
            '<div class="section-icon quiz-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>' +
            '<h3>Quiz du jour</h3>' +
            '<svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="day-section-body open"><div class="quiz-launch-area">' +
            '<p>' + QUIZ_DATA[day.id].title + ' — ' + QUIZ_DATA[day.id].questions.length + ' questions</p>' +
            '<button class="quiz-start-btn ' + quizBtnClass + '" onclick="startQuiz(' + day.id + ')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> ' +
            quizLabel + '</button>';
        if (quizScore !== undefined) {
            html += '<div class="quiz-result-mini"><div class="quiz-result-bar"><div class="quiz-result-fill" style="width:' + quizScore + '%"></div></div><span>' + quizScore + '% de bonnes reponses</span></div>';
        }
        html += '</div></div></div>';
    }

    // Time spent on this day
    var dayTime = userTimeSpent[day.id] || 0;
    if (dayTime > 0) {
        html += '<div class="day-time-spent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Temps passe sur ce jour : <strong>' + formatTimeSpent(dayTime) + '</strong></div>';
    }

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

        // Presentation mode button
        html += '<div class="presentation-mode-launch">' +
            '<button class="presentation-mode-btn" onclick="startPresentationMode(' + day.id + ')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' +
            ' Mode presentation (plein ecran)</button></div>';

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
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS['jour' + dayId] : null;
    if (!guide || !guide.moduleExplanations) return '';

    var modules = guide.moduleExplanations;
    var moduleKeys = Object.keys(modules);
    if (moduleKeys.length === 0) return '';

    var result = '';
    moduleKeys.forEach(function(key, modIndex) {
        var mod = modules[key];
        result += '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
            '<div class="section-icon formateur-module-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>' +
            '<h3><span class="formateur-badge">Formateur</span> ' + key.replace(/([A-Z])/g, ' $1').replace(/^./, function(s){ return s.toUpperCase(); });
        result += '</h3><svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="day-section-body"><div class="formateur-content">';

        // What to say
        if (mod.whatToSay) {
            result += '<div class="detailed-whattosay"><div class="detailed-label speech">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
                'Ce qu\'il faut dire</div><blockquote>' + mod.whatToSay + '</blockquote></div>';
        }

        // Demo steps
        if (mod.demoSteps && mod.demoSteps.length > 0) {
            result += '<div class="detailed-demo"><div class="detailed-label demo">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' +
                'Demonstration pas a pas</div><ol class="demo-steps-list">';
            mod.demoSteps.forEach(function(step) { result += '<li>' + step + '</li>'; });
            result += '</ol></div>';
        }

        result += '</div></div></div>';
    });
    return result;
}

function renderDetailedFaq(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS['jour' + dayId] : null;
    if (!guide) return '';
    var faqData = guide.FAQ || guide.faq;
    if (!faqData || faqData.length === 0) return '';

    var result = '<div class="day-section formateur-card"><div class="day-section-header" onclick="toggleSection(this)">' +
        '<div class="section-icon formateur-faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>' +
        '<h3><span class="formateur-badge">Formateur</span> Questions frequentes</h3>' +
        '<svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg></div>' +
        '<div class="day-section-body"><div class="formateur-content"><div class="faq-list">';

    faqData.forEach(function(item, i) {
        result += '<div class="faq-item" onclick="toggleFaqItem(this)">' +
            '<div class="faq-question"><span class="faq-q-label">Q' + (i + 1) + '</span><span>' + item.question + '</span>' +
            '<svg class="chevron-toggle-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg></div>' +
            '<div class="faq-answer"><span class="faq-a-label">R</span><p>' + item.answer + '</p></div></div>';
    });

    result += '</div></div></div></div>';
    return result;
}

function renderDetailedTransition(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS['jour' + dayId] : null;
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
// DAY TIME TRACKING
// ==========================================
function startDayTimer(dayId) {
    stopDayTimer();
    dayTimerStart = Date.now();
    dayTimerInterval = setInterval(function() {
        // Save every 30 seconds
        var elapsed = Math.floor((Date.now() - dayTimerStart) / 1000);
        if (elapsed > 0 && elapsed % 30 === 0) {
            saveDayTime(dayId);
        }
    }, 1000);
}

function stopDayTimer() {
    if (dayTimerInterval) {
        clearInterval(dayTimerInterval);
        if (dayTimerStart && currentDayId) {
            saveDayTime(currentDayId);
        }
        dayTimerInterval = null;
        dayTimerStart = null;
    }
}

function saveDayTime(dayId) {
    if (!dayTimerStart) return;
    var elapsed = Math.floor((Date.now() - dayTimerStart) / 1000);
    userTimeSpent[dayId] = (userTimeSpent[dayId] || 0) + elapsed;
    dayTimerStart = Date.now(); // Reset start
    saveUserData(currentUser.uid, 'timeSpent', userTimeSpent);
}

function formatTimeSpent(seconds) {
    if (seconds < 60) return seconds + 's';
    var m = Math.floor(seconds / 60);
    var h = Math.floor(m / 60);
    m = m % 60;
    if (h > 0) return h + 'h' + String(m).padStart(2, '0') + 'min';
    return m + 'min';
}

// Stop day timer when navigating away
var originalNavigateTo = navigateTo;
navigateTo = function(view) {
    stopDayTimer();
    originalNavigateTo(view);
};

// ==========================================
// QUIZ SYSTEM
// ==========================================
function startQuiz(dayId) {
    var quiz = QUIZ_DATA[dayId];
    if (!quiz) return;

    var html = '<div class="quiz-overlay" id="quiz-overlay">' +
        '<div class="quiz-modal">' +
        '<div class="quiz-modal-header">' +
        '<h2>' + quiz.title + '</h2>' +
        '<button class="quiz-close-btn" onclick="closeQuiz()">✕</button>' +
        '</div>' +
        '<div class="quiz-questions" id="quiz-questions">';

    quiz.questions.forEach(function(q, qi) {
        html += '<div class="quiz-question" data-qi="' + qi + '">' +
            '<div class="quiz-q-num">Question ' + (qi + 1) + '/' + quiz.questions.length + '</div>' +
            '<p class="quiz-q-text">' + q.q + '</p>' +
            '<div class="quiz-options">';
        q.options.forEach(function(opt, oi) {
            html += '<button class="quiz-option" data-qi="' + qi + '" data-oi="' + oi + '" onclick="selectQuizOption(' + dayId + ',' + qi + ',' + oi + ')">' +
                '<span class="quiz-option-letter">' + String.fromCharCode(65 + oi) + '</span>' +
                '<span class="quiz-option-text">' + opt + '</span></button>';
        });
        html += '</div></div>';
    });

    html += '</div>' +
        '<div class="quiz-footer">' +
        '<button class="quiz-submit-btn" id="quiz-submit-btn" onclick="submitQuiz(' + dayId + ')" disabled>Valider mes reponses</button>' +
        '</div></div></div>';

    document.body.insertAdjacentHTML('beforeend', html);
}

function selectQuizOption(dayId, qi, oi) {
    // Toggle selection within this question
    var opts = document.querySelectorAll('.quiz-option[data-qi="' + qi + '"]');
    opts.forEach(function(o) { o.classList.remove('selected'); });
    var selected = document.querySelector('.quiz-option[data-qi="' + qi + '"][data-oi="' + oi + '"]');
    if (selected) selected.classList.add('selected');

    // Check if all questions answered
    var quiz = QUIZ_DATA[dayId];
    var allAnswered = true;
    for (var i = 0; i < quiz.questions.length; i++) {
        if (!document.querySelector('.quiz-option[data-qi="' + i + '"].selected')) {
            allAnswered = false;
            break;
        }
    }
    document.getElementById('quiz-submit-btn').disabled = !allAnswered;
}

async function submitQuiz(dayId) {
    var quiz = QUIZ_DATA[dayId];
    var correct = 0;

    quiz.questions.forEach(function(q, qi) {
        var selected = document.querySelector('.quiz-option[data-qi="' + qi + '"].selected');
        var selectedIndex = selected ? parseInt(selected.dataset.oi) : -1;
        var isCorrect = selectedIndex === q.answer;

        // Show correct/wrong
        var opts = document.querySelectorAll('.quiz-option[data-qi="' + qi + '"]');
        opts.forEach(function(o) {
            o.disabled = true;
            o.classList.add('disabled');
            if (parseInt(o.dataset.oi) === q.answer) {
                o.classList.add('correct');
            } else if (o.classList.contains('selected') && !isCorrect) {
                o.classList.add('wrong');
            }
        });

        if (isCorrect) correct++;
    });

    var score = Math.round((correct / quiz.questions.length) * 100);
    userQuizScores[dayId] = score;
    await saveUserData(currentUser.uid, 'quizScores', userQuizScores);

    // Show result
    var submitBtn = document.getElementById('quiz-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = correct + '/' + quiz.questions.length + ' — ' + score + '%';
    submitBtn.classList.add(score === 100 ? 'perfect' : (score >= 60 ? 'good' : 'retry'));

    // Add result message
    var resultHtml = '<div class="quiz-result-message">';
    if (score === 100) {
        resultHtml += '<span class="quiz-result-emoji">🎉</span><p>Parfait ! Tu maitrises le sujet !</p>';
    } else if (score >= 60) {
        resultHtml += '<span class="quiz-result-emoji">👍</span><p>Bien joue ! Tu peux reessayer pour le score parfait.</p>';
    } else {
        resultHtml += '<span class="quiz-result-emoji">💪</span><p>Revois les points cles du jour et reessaie !</p>';
    }
    resultHtml += '<button class="quiz-retry-btn" onclick="closeQuiz(); setTimeout(function(){startQuiz(' + dayId + ')},200)">Recommencer</button>';
    resultHtml += '<button class="quiz-close-result-btn" onclick="closeQuiz(); navigateToDay(' + dayId + ')">Fermer</button></div>';
    document.querySelector('.quiz-footer').insertAdjacentHTML('beforeend', resultHtml);

    // Check badges
    checkAndNotifyBadges();
}

function closeQuiz() {
    var overlay = document.getElementById('quiz-overlay');
    if (overlay) overlay.remove();
}

// ==========================================
// BADGES & GAMIFICATION
// ==========================================
function renderBadges() {
    var html = '<div class="badges-page">' +
        '<h1>🏆 Mes badges & trophees</h1>' +
        '<p>Debloquez des badges en progressant dans la formation. Chaque badge recompense une etape cle !</p>';

    var unlockedCount = 0;
    html += '<div class="badges-grid">';
    BADGES_DATA.forEach(function(badge) {
        var unlocked = badge.condition(userProgress, userQuizScores);
        if (unlocked) unlockedCount++;
        html += '<div class="badge-card ' + (unlocked ? 'unlocked' : 'locked') + '">' +
            '<div class="badge-icon-large">' + badge.icon + '</div>' +
            '<h3 class="badge-title">' + badge.title + '</h3>' +
            '<p class="badge-description">' + badge.description + '</p>' +
            (unlocked ? '<div class="badge-unlocked-label">✓ Debloque</div>' : '<div class="badge-locked-label">🔒 Verrouillee</div>') +
            '</div>';
    });
    html += '</div>';

    html += '<div class="badges-summary"><p>' + unlockedCount + ' badge' + (unlockedCount > 1 ? 's' : '') + ' sur ' + BADGES_DATA.length + ' debloques</p>' +
        '<div class="badges-progress-bar"><div class="badges-progress-fill" style="width:' + Math.round((unlockedCount / BADGES_DATA.length) * 100) + '%"></div></div></div>';
    html += '</div>';

    document.getElementById('content-area').innerHTML = html;
}

function checkAndNotifyBadges() {
    if (typeof BADGES_DATA === 'undefined') return;
    var previouslyUnlocked = JSON.parse(localStorage.getItem('atelierlo_unlocked_badges') || '[]');
    var nowUnlocked = [];
    BADGES_DATA.forEach(function(badge) {
        if (badge.condition(userProgress, userQuizScores)) {
            nowUnlocked.push(badge.id);
            if (previouslyUnlocked.indexOf(badge.id) === -1) {
                showToast('🏆 Badge debloque : ' + badge.icon + ' ' + badge.title, 'success');
            }
        }
    });
    localStorage.setItem('atelierlo_unlocked_badges', JSON.stringify(nowUnlocked));
}

// ==========================================
// PRESENTATION MODE (fullscreen formateur)
// ==========================================
function startPresentationMode(dayId) {
    var guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS['jour' + dayId] : null;
    var dayData = null;
    FORMATION_DATA.weeks.forEach(function(week) {
        week.days.forEach(function(day) {
            if (day.id === dayId) dayData = day;
        });
    });
    if (!dayData) return;

    // Build slides
    var slides = [];

    // Title slide
    slides.push({
        type: 'title',
        html: '<div class="pres-slide-title"><h1>Jour ' + dayId + '</h1><h2>' + dayData.title + '</h2><p>' + dayData.subtitle + '</p></div>'
    });

    // Objectives slide
    var objHtml = '<div class="pres-slide-content"><h2>🎯 Objectifs</h2><ul>';
    dayData.objectives.forEach(function(o) { objHtml += '<li>' + o + '</li>'; });
    objHtml += '</ul></div>';
    slides.push({ type: 'content', html: objHtml });

    // Key points slides (one per point)
    dayData.keyPoints.forEach(function(kp) {
        slides.push({
            type: 'content',
            html: '<div class="pres-slide-content"><h2>📌 ' + kp.title + '</h2><p>' + kp.content + '</p></div>'
        });
    });

    // Module slides from guide
    if (guide && guide.moduleExplanations) {
        var moduleKeys = Object.keys(guide.moduleExplanations);
        moduleKeys.forEach(function(key) {
            var mod = guide.moduleExplanations[key];
            var modHtml = '<div class="pres-slide-content"><h2>🖥 ' + key.replace(/([A-Z])/g, ' $1').replace(/^./, function(s){ return s.toUpperCase(); }) + '</h2>';
            if (mod.whatToSay) modHtml += '<blockquote>' + mod.whatToSay + '</blockquote>';
            if (mod.demoSteps && mod.demoSteps.length > 0) {
                modHtml += '<ol>';
                mod.demoSteps.forEach(function(s) { modHtml += '<li>' + s + '</li>'; });
                modHtml += '</ol>';
            }
            modHtml += '</div>';
            slides.push({ type: 'content', html: modHtml });
        });
    }

    // Exercise slide
    slides.push({
        type: 'content',
        html: '<div class="pres-slide-content"><h2>💪 Exercice</h2><h3>' + dayData.exercise.title + '</h3><p>' + dayData.exercise.description + '</p><ol>' +
            dayData.exercise.steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
            '</ol></div>'
    });

    // Timing slide
    if (dayData.formateurGuide && dayData.formateurGuide.timing) {
        var timingHtml = '<div class="pres-slide-content"><h2>⏰ Planning horaire</h2><div class="pres-timing">';
        dayData.formateurGuide.timing.forEach(function(t) {
            timingHtml += '<div class="pres-timing-item"><strong>' + t.time + '</strong> — ' + t.content + '</div>';
        });
        timingHtml += '</div></div>';
        slides.push({ type: 'content', html: timingHtml });
    }

    // Render overlay
    var currentSlide = 0;
    var overlayHtml = '<div class="presentation-overlay" id="presentation-overlay">' +
        '<div class="pres-controls">' +
        '<span class="pres-counter" id="pres-counter">1/' + slides.length + '</span>' +
        '<button class="pres-btn" onclick="presNav(-1)" id="pres-prev" disabled>← Precedent</button>' +
        '<button class="pres-btn" onclick="presNav(1)" id="pres-next">Suivant →</button>' +
        '<button class="pres-close-btn" onclick="closePresentationMode()">✕ Quitter</button>' +
        '</div>' +
        '<div class="pres-slide-container" id="pres-slide-container">' +
        slides[0].html +
        '</div></div>';

    document.body.insertAdjacentHTML('beforeend', overlayHtml);
    window._presSlides = slides;
    window._presCurrentSlide = 0;

    // Keyboard navigation
    document.addEventListener('keydown', presKeyHandler);

    // Try fullscreen
    try { document.getElementById('presentation-overlay').requestFullscreen(); } catch(e) {}
}

function presKeyHandler(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); presNav(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); presNav(-1); }
    if (e.key === 'Escape') closePresentationMode();
}

function presNav(dir) {
    var slides = window._presSlides;
    var idx = window._presCurrentSlide + dir;
    if (idx < 0 || idx >= slides.length) return;
    window._presCurrentSlide = idx;
    document.getElementById('pres-slide-container').innerHTML = slides[idx].html;
    document.getElementById('pres-counter').textContent = (idx + 1) + '/' + slides.length;
    document.getElementById('pres-prev').disabled = idx === 0;
    document.getElementById('pres-next').disabled = idx === slides.length - 1;
}

function closePresentationMode() {
    document.removeEventListener('keydown', presKeyHandler);
    var overlay = document.getElementById('presentation-overlay');
    if (overlay) overlay.remove();
    if (document.fullscreenElement) {
        try { document.exitFullscreen(); } catch(e) {}
    }
}

// ==========================================
// FORMATEUR: STUDENTS OVERVIEW
// ==========================================

// Mini preview on formateur dashboard (async loaded)
async function loadFormateurStudentsPreview() {
    var container = document.getElementById('formateur-students-preview');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted);font-size:13px;padding:8px 0;">Chargement des donnees apprenants...</p>';

    var studentsData = await loadAllApprenantsData();
    if (studentsData.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);font-size:13px;">Aucun apprenant inscrit.</p>';
        return;
    }

    var html = '<div class="students-preview-grid">';
    studentsData.forEach(function(student) {
        var progress = student.data.progress || {};
        var completedDays = Object.keys(progress).filter(function(k) { return progress[k]; }).length;
        var pct = Math.round((completedDays / 20) * 100);
        var quizCount = Object.keys(student.data.quizScores || {}).length;
        var totalTime = Object.values(student.data.timeSpent || {}).reduce(function(a, b) { return a + b; }, 0);
        var initial = student.info.name.charAt(0).toUpperCase();

        html += '<div class="student-preview-card" onclick="viewStudentDetail(\'' + student.info.uid + '\')" role="button" tabindex="0">' +
            '<div class="student-preview-avatar">' + initial + '</div>' +
            '<div class="student-preview-info">' +
            '<div class="student-preview-name">' + student.info.name + '</div>' +
            '<div class="student-preview-progress-bar"><div class="student-preview-progress-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="student-preview-stats">' +
            '<span>' + pct + '% — ' + completedDays + '/20 jours</span>' +
            '<span>' + quizCount + ' quiz</span>' +
            (totalTime > 0 ? '<span>' + formatTimeSpent(totalTime) + '</span>' : '') +
            '</div></div></div>';
    });
    html += '</div>';
    container.innerHTML = html;
}

// Full students overview page (formateur only)
async function renderStudentsOverview() {
    if (currentUser.role !== 'formateur') {
        navigateTo('dashboard');
        return;
    }

    document.getElementById('content-area').innerHTML = '<div class="students-page"><h1>👥 Suivi des apprenants</h1>' +
        '<p>Chargement des donnees...</p></div>';

    var studentsData = await loadAllApprenantsData();

    var html = '<div class="students-page">' +
        '<h1>👥 Gestion des apprenants</h1>' +
        '<p>Creez des comptes, gerez les identifiants et suivez la progression de chaque eleve.</p>';

    // ============ CREATE STUDENT FORM ============
    html += '<div class="create-student-section">' +
        '<h2 class="section-heading">➕ Inscrire un nouvel eleve</h2>' +
        '<form class="create-student-form" id="create-student-form" onsubmit="handleCreateStudent(event)">' +
        '<div class="create-student-fields">' +
        '<div class="form-field">' +
        '<label for="new-student-firstname">Prenom</label>' +
        '<input type="text" id="new-student-firstname" placeholder="Ex : Marie" required class="form-input">' +
        '</div>' +
        '<div class="form-field">' +
        '<label for="new-student-lastname">Nom</label>' +
        '<input type="text" id="new-student-lastname" placeholder="Ex : Dupont" required class="form-input">' +
        '</div>' +
        '<button type="submit" class="create-student-btn" id="create-student-btn">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' +
        ' Creer le compte</button>' +
        '</div></form></div>';

    // ============ CREDENTIALS RESULT (hidden by default) ============
    html += '<div class="credentials-result" id="credentials-result" style="display:none">' +
        '<div class="credentials-card">' +
        '<div class="credentials-header"><span class="credentials-icon">🎉</span><h3>Compte cree avec succes !</h3></div>' +
        '<div class="credentials-details">' +
        '<div class="credential-row"><span class="credential-label">Nom</span><span class="credential-value" id="cred-name"></span></div>' +
        '<div class="credential-row"><span class="credential-label">Email</span><span class="credential-value" id="cred-email"></span><button class="copy-btn" onclick="copyCredential(\'cred-email\')" title="Copier">📋</button></div>' +
        '<div class="credential-row"><span class="credential-label">Mot de passe</span><span class="credential-value" id="cred-password"></span><button class="copy-btn" onclick="copyCredential(\'cred-password\')" title="Copier">📋</button></div>' +
        '</div>' +
        '<div class="credentials-actions">' +
        '<button class="formateur-action-btn" onclick="copyAllCredentials()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copier tout</button>' +
        '<button class="formateur-action-btn" onclick="document.getElementById(\'credentials-result\').style.display=\'none\'">Fermer</button>' +
        '</div>' +
        '<p class="credentials-warning">⚠️ Communiquez ces identifiants a l\'eleve. Le mot de passe ne sera plus visible une fois cette fenetre fermee (sauf dans la liste ci-dessous).</p>' +
        '</div></div>';

    // ============ EXISTING ACCOUNTS TABLE ============
    var allAccounts = [];
    Object.keys(DEMO_ACCOUNTS).forEach(function(email) {
        if (DEMO_ACCOUNTS[email].role === 'apprenant') {
            allAccounts.push({ email: email, account: DEMO_ACCOUNTS[email] });
        }
    });

    html += '<div class="accounts-section">' +
        '<h2 class="section-heading">🔑 Comptes apprenants (' + allAccounts.length + ')</h2>';

    if (allAccounts.length === 0) {
        html += '<div class="students-empty"><p>Aucun compte apprenant cree.</p>' +
            '<p style="color:var(--text-muted)">Utilisez le formulaire ci-dessus pour inscrire vos eleves.</p></div>';
    } else {
        html += '<div class="accounts-table-wrapper"><table class="accounts-table">' +
            '<thead><tr><th>Eleve</th><th>Email (identifiant)</th><th>Mot de passe</th><th>Actions</th></tr></thead><tbody>';

        allAccounts.forEach(function(item) {
            var initial = item.account.name.charAt(0).toUpperCase();
            html += '<tr class="account-row">' +
                '<td><div class="student-cell-name"><div class="student-table-avatar">' + initial + '</div><strong>' + item.account.name + '</strong></div></td>' +
                '<td><code class="credential-code">' + item.email + '</code><button class="copy-btn-inline" onclick="copyText(\'' + item.email + '\')" title="Copier">📋</button></td>' +
                '<td><code class="credential-code password-hidden" id="pwd-' + item.account.uid + '">' + item.account.password + '</code>' +
                '<button class="copy-btn-inline" onclick="copyText(\'' + item.account.password + '\')" title="Copier">📋</button>' +
                '<button class="copy-btn-inline" onclick="togglePasswordVisibility(\'pwd-' + item.account.uid + '\')" title="Afficher/Masquer">👁</button></td>' +
                '<td class="account-actions">' +
                '<button class="account-action-btn reset" onclick="handleResetPassword(\'' + item.email + '\')" title="Nouveau mot de passe">🔄 MDP</button>' +
                '<button class="account-action-btn delete" onclick="handleDeleteStudent(\'' + item.email + '\', \'' + item.account.name + '\')" title="Supprimer">🗑</button>' +
                '</td></tr>';
        });

        html += '</tbody></table></div>';
    }
    html += '</div>';

    // ============ SEPARATOR ============
    if (studentsData.length > 0) {
        html += '<hr class="section-divider">';

        // ============ PROGRESSION TABLE ============
        html += '<h2 class="section-heading">📊 Suivi de progression</h2>' +
            '<p style="color:var(--text-secondary);margin-bottom:16px;">Cliquez sur un eleve pour voir le detail complet.</p>';

        // Summary bar
        var totalDaysAll = 0, totalQuizAll = 0, totalTimeAll = 0;
        studentsData.forEach(function(s) {
            totalDaysAll += Object.keys(s.data.progress || {}).filter(function(k) { return s.data.progress[k]; }).length;
            totalQuizAll += Object.keys(s.data.quizScores || {}).length;
            totalTimeAll += Object.values(s.data.timeSpent || {}).reduce(function(a, b) { return a + b; }, 0);
        });
        var avgProgress = Math.round(totalDaysAll / studentsData.length);

        html += '<div class="students-summary-bar">' +
            '<div class="students-summary-stat"><span class="students-summary-num">' + studentsData.length + '</span><span class="students-summary-label">Apprenants</span></div>' +
            '<div class="students-summary-stat"><span class="students-summary-num">' + avgProgress + '/20</span><span class="students-summary-label">Moyenne jours</span></div>' +
            '<div class="students-summary-stat"><span class="students-summary-num">' + totalQuizAll + '</span><span class="students-summary-label">Quiz completes</span></div>' +
            '<div class="students-summary-stat"><span class="students-summary-num">' + formatTimeSpent(totalTimeAll) + '</span><span class="students-summary-label">Temps total</span></div>' +
            '</div>';

        // Comparison table
        html += '<div class="students-table-wrapper"><table class="students-table">' +
            '<thead><tr>' +
            '<th>Apprenant</th>' +
            '<th>Progression</th>' +
            '<th>Jours</th>' +
            '<th>Quiz</th>' +
            '<th>Moy. Quiz</th>' +
            '<th>Temps</th>' +
            '<th></th>' +
            '</tr></thead><tbody>';

        studentsData.forEach(function(student) {
            var progress = student.data.progress || {};
            var completedDays = Object.keys(progress).filter(function(k) { return progress[k]; }).length;
            var pct = Math.round((completedDays / 20) * 100);
            var quizScores = student.data.quizScores || {};
            var quizCount = Object.keys(quizScores).length;
            var avgQuiz = quizCount > 0 ? Math.round(Object.values(quizScores).reduce(function(a, b) { return a + b; }, 0) / quizCount) : 0;
            var totalTime = Object.values(student.data.timeSpent || {}).reduce(function(a, b) { return a + b; }, 0);
            var initial = student.info.name.charAt(0).toUpperCase();

            var progressColor = pct >= 80 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : pct > 0 ? 'var(--primary)' : 'var(--text-muted)';

            html += '<tr class="student-row" onclick="viewStudentDetail(\'' + student.info.uid + '\')">' +
                '<td><div class="student-cell-name"><div class="student-table-avatar">' + initial + '</div><div><strong>' + student.info.name + '</strong><span class="student-email">' + student.info.email + '</span></div></div></td>' +
                '<td><div class="student-progress-cell"><div class="student-table-bar"><div class="student-table-bar-fill" style="width:' + pct + '%;background:' + progressColor + '"></div></div><span style="color:' + progressColor + ';font-weight:700">' + pct + '%</span></div></td>' +
                '<td><span class="student-stat-value">' + completedDays + '<span class="student-stat-max">/20</span></span></td>' +
                '<td><span class="student-stat-value">' + quizCount + '<span class="student-stat-max">/20</span></span></td>' +
                '<td><span class="student-stat-value ' + (avgQuiz >= 80 ? 'good' : avgQuiz >= 50 ? 'medium' : '') + '">' + (quizCount > 0 ? avgQuiz + '%' : '—') + '</span></td>' +
                '<td><span class="student-stat-value">' + (totalTime > 0 ? formatTimeSpent(totalTime) : '—') + '</span></td>' +
                '<td><button class="student-detail-btn" onclick="event.stopPropagation(); viewStudentDetail(\'' + student.info.uid + '\')">Detail →</button></td>' +
                '</tr>';
        });

        html += '</tbody></table></div>';

        // Day-by-day comparison grid
        html += '<h2 class="section-heading" style="margin-top:28px;">📅 Grille de progression par jour</h2>';
        html += '<div class="students-day-grid"><table class="students-day-table"><thead><tr><th>Apprenant</th>';
        for (var d = 1; d <= 20; d++) { html += '<th class="day-col">J' + d + '</th>'; }
        html += '</tr></thead><tbody>';
        studentsData.forEach(function(student) {
            var progress = student.data.progress || {};
            html += '<tr><td class="student-day-name">' + student.info.name.split(' ')[0] + '</td>';
            for (var d = 1; d <= 20; d++) {
                var done = progress[d];
                html += '<td class="day-cell ' + (done ? 'done' : '') + '">' + (done ? '✓' : '') + '</td>';
            }
            html += '</tr>';
        });
        html += '</tbody></table></div>';
    }

    html += '</div>';
    document.getElementById('content-area').innerHTML = html;
}

// ==========================================
// FORMATEUR: CREATE & MANAGE STUDENTS
// ==========================================

// Handle create student form submission
async function handleCreateStudent(e) {
    e.preventDefault();
    var firstName = document.getElementById('new-student-firstname').value.trim();
    var lastName = document.getElementById('new-student-lastname').value.trim();

    if (!firstName || !lastName) {
        showToast('Veuillez remplir le prenom et le nom', 'error');
        return;
    }

    var btn = document.getElementById('create-student-btn');
    btn.disabled = true;
    btn.textContent = 'Creation en cours...';

    try {
        var result = await createApprenant(firstName, lastName);

        // Show credentials
        document.getElementById('cred-name').textContent = result.name;
        document.getElementById('cred-email').textContent = result.email;
        document.getElementById('cred-password').textContent = result.password;
        document.getElementById('credentials-result').style.display = 'block';
        document.getElementById('credentials-result').scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset form
        document.getElementById('new-student-firstname').value = '';
        document.getElementById('new-student-lastname').value = '';

        showToast('Compte cree pour ' + result.name, 'success');

        // Refresh page after a small delay to show credentials first
        setTimeout(function() { renderStudentsOverview(); }, 100);
        // Re-show credentials after re-render
        setTimeout(function() {
            var credEl = document.getElementById('credentials-result');
            if (credEl) {
                document.getElementById('cred-name').textContent = result.name;
                document.getElementById('cred-email').textContent = result.email;
                document.getElementById('cred-password').textContent = result.password;
                credEl.style.display = 'block';
            }
        }, 500);
    } catch (err) {
        showToast('Erreur lors de la creation : ' + err.message, 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Creer le compte';
    }
}

// Handle delete student
async function handleDeleteStudent(email, name) {
    if (!confirm('Supprimer le compte de ' + name + ' ?\n\nCette action supprimera toutes les donnees de cet eleve.')) return;

    var deleted = await deleteApprenant(email);
    if (deleted) {
        showToast('Compte de ' + name + ' supprime', 'success');
        renderStudentsOverview();
    } else {
        showToast('Erreur lors de la suppression', 'error');
    }
}

// Handle reset password
function handleResetPassword(email) {
    var newPwd = resetApprenantPassword(email);
    if (newPwd) {
        var name = DEMO_ACCOUNTS[email] ? DEMO_ACCOUNTS[email].name : email;
        // Show in a temporary toast with the new password
        showToast('Nouveau mot de passe pour ' + name + ' : ' + newPwd, 'success');
        // Refresh the table
        renderStudentsOverview();
    } else {
        showToast('Erreur lors de la reinitialisation', 'error');
    }
}

// Copy a credential value
function copyCredential(elementId) {
    var text = document.getElementById(elementId).textContent;
    copyText(text);
}

// Copy text to clipboard
function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('Copie dans le presse-papiers !', 'success');
        });
    } else {
        // Fallback
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Copie dans le presse-papiers !', 'success');
    }
}

// Copy all credentials
function copyAllCredentials() {
    var name = document.getElementById('cred-name').textContent;
    var email = document.getElementById('cred-email').textContent;
    var password = document.getElementById('cred-password').textContent;
    var text = 'Formation ARCHICAD — AtelierLO\n' +
        'Identifiants de connexion pour ' + name + '\n\n' +
        'Email : ' + email + '\n' +
        'Mot de passe : ' + password + '\n\n' +
        'Connectez-vous sur la plateforme de formation.';
    copyText(text);
}

// Toggle password visibility
function togglePasswordVisibility(elementId) {
    var el = document.getElementById(elementId);
    if (el) {
        el.classList.toggle('password-hidden');
    }
}

// ==========================================
// FORMATEUR: STUDENT DETAIL VIEW
// ==========================================
async function viewStudentDetail(studentUid) {
    if (currentUser.role !== 'formateur') return;

    currentView = 'student-detail';
    document.getElementById('content-title').textContent = 'Chargement...';
    document.getElementById('content-area').innerHTML = '<div class="student-detail-page"><p>Chargement des donnees...</p></div>';

    // Find student info
    var allApprenants = await getAllApprenants();
    var studentInfo = null;
    allApprenants.forEach(function(a) { if (a.uid === studentUid) studentInfo = a; });
    if (!studentInfo) {
        document.getElementById('content-area').innerHTML = '<p>Apprenant introuvable.</p>';
        return;
    }

    document.getElementById('content-title').textContent = 'Profil de ' + studentInfo.name;

    var data = await loadAllApprenantData(studentUid);
    var progress = data.progress || {};
    var checklist = data.checklist || {};
    var quizScores = data.quizScores || {};
    var timeSpent = data.timeSpent || {};
    var evaluation = data.evaluation || {};
    var notes = data.notes || {};

    var completedDays = Object.keys(progress).filter(function(k) { return progress[k]; }).length;
    var pct = Math.round((completedDays / 20) * 100);
    var quizCount = Object.keys(quizScores).length;
    var avgQuiz = quizCount > 0 ? Math.round(Object.values(quizScores).reduce(function(a, b) { return a + b; }, 0) / quizCount) : 0;
    var totalTime = Object.values(timeSpent).reduce(function(a, b) { return a + b; }, 0);
    var totalChecklistDone = 0;
    var totalChecklistItems = 0;
    Object.keys(checklist).forEach(function(dk) {
        Object.keys(checklist[dk]).forEach(function(ik) { if (checklist[dk][ik]) totalChecklistDone++; });
    });
    FORMATION_DATA.weeks.forEach(function(w) { w.days.forEach(function(d) { totalChecklistItems += d.checklist.length; }); });
    var evalAcquis = 0;
    Object.values(evaluation).forEach(function(v) { if (v === 'acquis') evalAcquis++; });

    var badgesUnlocked = 0;
    if (typeof BADGES_DATA !== 'undefined') {
        badgesUnlocked = BADGES_DATA.filter(function(b) { return b.condition(progress, quizScores); }).length;
    }

    var html = '<div class="student-detail-page">';

    // Back button
    html += '<button class="student-back-btn" onclick="navigateTo(\'students\')">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Retour a la liste</button>';

    // Header
    html += '<div class="student-detail-header">' +
        '<div class="student-detail-avatar">' + studentInfo.name.charAt(0).toUpperCase() + '</div>' +
        '<div class="student-detail-info">' +
        '<h1>' + studentInfo.name + '</h1>' +
        '<p>' + studentInfo.email + '</p>' +
        '</div></div>';

    // Stats cards
    html += '<div class="student-detail-stats">' +
        '<div class="student-stat-card"><div class="student-stat-card-num" style="color:var(--primary)">' + pct + '%</div><div class="student-stat-card-label">Progression</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + completedDays + '/20</div><div class="student-stat-card-label">Jours termines</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + quizCount + '/20</div><div class="student-stat-card-label">Quiz passes</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num" style="color:' + (avgQuiz >= 80 ? 'var(--success)' : avgQuiz >= 50 ? 'var(--warning)' : 'var(--danger)') + '">' + (quizCount > 0 ? avgQuiz + '%' : '—') + '</div><div class="student-stat-card-label">Moyenne quiz</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + totalChecklistDone + '/' + totalChecklistItems + '</div><div class="student-stat-card-label">Acquis valides</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + (totalTime > 0 ? formatTimeSpent(totalTime) : '—') + '</div><div class="student-stat-card-label">Temps total</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + badgesUnlocked + '/' + (typeof BADGES_DATA !== 'undefined' ? BADGES_DATA.length : 0) + '</div><div class="student-stat-card-label">Badges</div></div>' +
        '<div class="student-stat-card"><div class="student-stat-card-num">' + evalAcquis + '</div><div class="student-stat-card-label">Competences acquises</div></div>' +
        '</div>';

    // Progress bar
    html += '<div class="student-detail-progress">' +
        '<h3>Progression globale</h3>' +
        '<div class="progress-bar-large"><div class="progress-fill-large" style="width:' + pct + '%"></div></div>' +
        '</div>';

    // Day-by-day detail
    html += '<h3 class="student-section-title">Detail par jour</h3>';
    html += '<div class="student-days-detail">';
    FORMATION_DATA.weeks.forEach(function(week) {
        html += '<div class="student-week-group"><h4 class="student-week-title">Semaine ' + week.id + ' — ' + week.title + '</h4>';
        html += '<div class="student-days-grid">';
        week.days.forEach(function(day) {
            var dayDone = progress[day.id];
            var dayQuiz = quizScores[day.id];
            var dayTime = timeSpent[day.id] || 0;
            var dayCheckDone = 0, dayCheckTotal = day.checklist.length;
            if (checklist[day.id]) {
                Object.keys(checklist[day.id]).forEach(function(k) { if (checklist[day.id][k]) dayCheckDone++; });
            }

            var statusClass = dayDone ? 'done' : dayCheckDone > 0 ? 'in-progress' : 'not-started';
            html += '<div class="student-day-card ' + statusClass + '">' +
                '<div class="student-day-card-header">' +
                '<span class="student-day-num">J' + day.id + '</span>' +
                '<span class="student-day-status">' + (dayDone ? '✓ Termine' : dayCheckDone > 0 ? '◐ En cours' : '○ Non commence') + '</span>' +
                '</div>' +
                '<div class="student-day-card-title">' + day.title + '</div>' +
                '<div class="student-day-card-details">';

            // Checklist progress
            html += '<div class="student-day-metric"><span>Acquis</span><span>' + dayCheckDone + '/' + dayCheckTotal + '</span></div>';

            // Quiz
            if (dayQuiz !== undefined) {
                html += '<div class="student-day-metric"><span>Quiz</span><span class="' + (dayQuiz >= 80 ? 'good' : dayQuiz >= 50 ? 'medium' : 'bad') + '">' + dayQuiz + '%</span></div>';
            }

            // Time
            if (dayTime > 0) {
                html += '<div class="student-day-metric"><span>Temps</span><span>' + formatTimeSpent(dayTime) + '</span></div>';
            }

            html += '</div></div>';
        });
        html += '</div></div>';
    });
    html += '</div>';

    // Badges
    if (typeof BADGES_DATA !== 'undefined') {
        html += '<h3 class="student-section-title">Badges</h3>';
        html += '<div class="student-badges-grid">';
        BADGES_DATA.forEach(function(badge) {
            var unlocked = badge.condition(progress, quizScores);
            html += '<div class="badge-mini ' + (unlocked ? 'unlocked' : 'locked') + '">' +
                '<span class="badge-mini-icon">' + badge.icon + '</span>' +
                '<span class="badge-mini-title">' + badge.title + '</span></div>';
        });
        html += '</div>';
    }

    // Quiz scores detail
    if (quizCount > 0) {
        html += '<h3 class="student-section-title">Resultats des quiz</h3>';
        html += '<div class="student-quiz-results">';
        for (var qd = 1; qd <= 20; qd++) {
            if (quizScores[qd] !== undefined) {
                var qPct = quizScores[qd];
                var qClass = qPct >= 80 ? 'good' : qPct >= 50 ? 'medium' : 'bad';
                html += '<div class="student-quiz-item"><span class="student-quiz-day">J' + qd + '</span>' +
                    '<div class="student-quiz-bar"><div class="student-quiz-fill ' + qClass + '" style="width:' + qPct + '%"></div></div>' +
                    '<span class="student-quiz-score ' + qClass + '">' + qPct + '%</span></div>';
            }
        }
        html += '</div>';
    }

    // Export button
    html += '<div class="export-actions" style="margin-top:32px">' +
        '<button class="export-btn" onclick="exportStudentPDF(\'' + studentUid + '\')">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
        'Exporter le bilan de ' + studentInfo.name.split(' ')[0] + ' (PDF)</button></div>';

    html += '</div>';
    document.getElementById('content-area').innerHTML = html;
}

// Export student PDF (formateur)
async function exportStudentPDF(studentUid) {
    if (typeof window.jspdf === 'undefined') {
        showToast('Bibliotheque PDF non chargee', 'error');
        return;
    }

    var allApprenants = await getAllApprenants();
    var studentInfo = null;
    allApprenants.forEach(function(a) { if (a.uid === studentUid) studentInfo = a; });
    if (!studentInfo) return;

    var data = await loadAllApprenantData(studentUid);
    var progress = data.progress || {};
    var quizScores = data.quizScores || {};
    var checklist = data.checklist || {};
    var evaluation = data.evaluation || {};
    var completedDays = Object.keys(progress).filter(function(k) { return progress[k]; }).length;
    var pct = Math.round((completedDays / 20) * 100);
    var quizCount = Object.keys(quizScores).length;
    var avgQuiz = quizCount > 0 ? Math.round(Object.values(quizScores).reduce(function(a, b) { return a + b; }, 0) / quizCount) : 0;

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var primary = [0, 166, 200];

    // Header
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text('AtelierLO  Bilan apprenant', 15, 20);
    doc.setFontSize(12);
    doc.text(studentInfo.name + ' — ' + studentInfo.email, 15, 32);

    // Date
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text('Genere le ' + new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) + ' par ' + currentUser.name, 15, 50);

    // Stats
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('Progression : ' + pct + '% (' + completedDays + '/20 jours)', 15, 65);
    doc.text('Quiz : ' + quizCount + '/20 (moyenne ' + avgQuiz + '%)', 15, 75);

    // Progress bar
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(15, 80, 180, 8, 4, 4, 'F');
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.roundedRect(15, 80, 180 * (pct / 100), 8, 4, 4, 'F');

    // Day detail
    var y = 100;
    FORMATION_DATA.weeks.forEach(function(week) {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        doc.text('Semaine ' + week.id + ' — ' + week.title, 15, y);
        y += 8;

        week.days.forEach(function(day) {
            if (y > 270) { doc.addPage(); y = 20; }
            var status = progress[day.id] ? '✓' : '○';
            doc.setFontSize(10);
            doc.setTextColor(progress[day.id] ? 34 : 150, progress[day.id] ? 197 : 150, progress[day.id] ? 94 : 150);
            doc.text(status, 20, y);
            doc.setTextColor(50, 50, 50);
            doc.text('J' + day.id + ' ' + day.title, 28, y);
            if (quizScores[day.id] !== undefined) {
                doc.setTextColor(quizScores[day.id] >= 80 ? 34 : 150, quizScores[day.id] >= 80 ? 197 : 150, quizScores[day.id] >= 80 ? 94 : 150);
                doc.text('Quiz: ' + quizScores[day.id] + '%', 160, y);
            }
            y += 6;
        });
        y += 4;
    });

    doc.save('bilan-' + studentInfo.name.replace(/\s/g, '-') + '.pdf');
    showToast('Bilan PDF exporte pour ' + studentInfo.name, 'success');
}

// ==========================================
// INIT
// ==========================================
checkAuth();
