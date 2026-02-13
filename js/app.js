// ==========================================
// APP.JS — Logique principale
// AtelierLO — Formation ARCHICAD
// ==========================================

// State
let currentUser = null;
let currentView = 'dashboard';
let currentDayId = null;
let formateurMode = false;
let userProgress = {};
let userNotes = {};
let userChecklist = {};

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
    document.getElementById('app-layout').classList.remove('active');
    document.getElementById('login-page').style.display = 'flex';
}

// ==========================================
// APP INIT
// ==========================================
async function showApp() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-layout').classList.add('active');
    
    // User info
    document.getElementById('user-display-name').textContent = currentUser.name;
    document.getElementById('user-role').textContent = currentUser.role === 'formateur' ? '🧑‍🏫 Formateur' : '🎓 Apprenant(e)';
    document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
    
    // Show formateur toggle if formateur
    if (currentUser.role === 'formateur') {
        document.getElementById('formateur-toggle').style.display = 'flex';
    }
    
    // Load data
    userProgress = await loadUserData(currentUser.uid, 'progress') || {};
    userNotes = await loadUserData(currentUser.uid, 'notes') || {};
    userChecklist = await loadUserData(currentUser.uid, 'checklist') || {};
    
    // Build sidebar
    buildSidebarProgramme();
    
    // Show dashboard
    navigateTo('dashboard');
}

// ==========================================
// SIDEBAR
// ==========================================
function buildSidebarProgramme() {
    const container = document.getElementById('sidebar-programme');
    let html = '';
    
    FORMATION_DATA.weeks.forEach(week => {
        const completedDays = week.days.filter(d => userProgress[d.id]).length;
        const totalDays = week.days.length;
        
        html += `
        <div class="week-group">
            <button class="nav-item week-toggle" onclick="toggleWeek(${week.id})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                S${week.id} — ${week.title}
                <span class="nav-badge">${completedDays}/${totalDays}</span>
                <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div class="week-submenu" id="week-submenu-${week.id}">
                ${week.days.map(day => `
                    <div class="day-item ${userProgress[day.id] ? 'completed' : ''} ${currentDayId === day.id ? 'active' : ''}" 
                         onclick="navigateToDay(${day.id})">
                        <span class="day-dot"></span>
                        <span>J${day.id} — ${day.title.length > 22 ? day.title.substring(0, 22) + '...' : day.title}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

function toggleWeek(weekId) {
    const submenu = document.getElementById(`week-submenu-${weekId}`);
    const toggle = submenu.previousElementSibling;
    submenu.classList.toggle('open');
    toggle.classList.toggle('open');
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('active');
}

document.getElementById('sidebar-overlay').addEventListener('click', () => {
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
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });
    
    // Update title
    const titles = {
        'dashboard': 'Dashboard',
        'shortcuts': 'Raccourcis clavier ARCHICAD',
        'resources': 'Ressources utiles',
        'notes': 'Mon carnet de notes'
    };
    document.getElementById('content-title').textContent = titles[view] || 'Dashboard';
    
    // Render view
    switch(view) {
        case 'dashboard': renderDashboard(); break;
        case 'shortcuts': renderShortcuts(); break;
        case 'resources': renderResources(); break;
        case 'notes': renderNotes(); break;
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
    let dayData = null;
    FORMATION_DATA.weeks.forEach(week => {
        week.days.forEach(day => {
            if (day.id === dayId) dayData = day;
        });
    });
    
    if (!dayData) return;
    
    // Update nav
    document.querySelectorAll('.nav-item[data-view]').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.day-item').forEach(item => item.classList.remove('active'));
    
    // Open week submenu
    const weekSubmenu = document.getElementById(`week-submenu-${dayData.week}`);
    if (weekSubmenu) {
        weekSubmenu.classList.add('open');
        weekSubmenu.previousElementSibling.classList.add('open');
    }
    
    document.getElementById('content-title').textContent = `Jour ${dayId} — ${dayData.title}`;
    
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
    
    const btn = document.getElementById('formateur-toggle');
    btn.classList.toggle('active', formateurMode);
    
    // Toggle all formateur sections
    document.querySelectorAll('.formateur-section').forEach(section => {
        section.classList.toggle('visible', formateurMode);
    });
}

// ==========================================
// PROGRESS
// ==========================================
function getProgress() {
    const totalDays = FORMATION_DATA.totalDays;
    const completedDays = Object.keys(userProgress).filter(k => userProgress[k]).length;
    return Math.round((completedDays / totalDays) * 100);
}

function updateProgressUI() {
    const pct = getProgress();
    document.getElementById('progress-mini-fill').style.width = pct + '%';
    document.getElementById('progress-mini-text').textContent = pct + '%';
}

async function toggleDayComplete(dayId) {
    userProgress[dayId] = !userProgress[dayId];
    await saveUserData(currentUser.uid, 'progress', userProgress);
    updateProgressUI();
    buildSidebarProgramme();
    
    if (currentView === 'day') {
        const btn = document.getElementById('complete-day-btn');
        if (btn) {
            if (userProgress[dayId]) {
                btn.classList.add('completed');
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg> Jour terminé';
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg> Marquer comme terminé';
            }
        }
    }
}

async function toggleChecklistItem(dayId, index) {
    if (!userChecklist[dayId]) userChecklist[dayId] = {};
    userChecklist[dayId][index] = !userChecklist[dayId][index];
    await saveUserData(currentUser.uid, 'checklist', userChecklist);
    
    const li = document.querySelector(`[data-checklist="${dayId}-${index}"]`);
    if (li) li.classList.toggle('checked', userChecklist[dayId][index]);
}

// ==========================================
// RENDER: DASHBOARD
// ==========================================
function renderDashboard() {
    updateProgressUI();
    const pct = getProgress();
    const completedCount = Object.keys(userProgress).filter(k => userProgress[k]).length;
    const currentDay = completedCount + 1;
    
    let html = `
    <div class="dashboard-welcome">
        <h1>Bonjour ${currentUser.name} 👋</h1>
        <p>Bienvenue sur votre espace de formation ARCHICAD.</p>
    </div>

    <div class="progress-card">
        <div class="progress-header">
            <h3>Progression globale</h3>
            <span class="progress-percentage">${pct}%</span>
        </div>
        <div class="progress-bar-large">
            <div class="progress-fill-large" style="width: ${pct}%"></div>
        </div>
        <div class="progress-stats">
            <div class="progress-stat">
                <span class="progress-stat-dot completed"></span>
                <span>${completedCount} jour${completedCount > 1 ? 's' : ''} terminé${completedCount > 1 ? 's' : ''}</span>
            </div>
            <div class="progress-stat">
                <span class="progress-stat-dot current"></span>
                <span>Jour ${Math.min(currentDay, 20)} en cours</span>
            </div>
            <div class="progress-stat">
                <span class="progress-stat-dot remaining"></span>
                <span>${20 - completedCount} jour${(20 - completedCount) > 1 ? 's' : ''} restant${(20 - completedCount) > 1 ? 's' : ''}</span>
            </div>
        </div>
    </div>

    <div class="dashboard-grid">
        <div class="dash-card" onclick="navigateToDay(${Math.min(currentDay, 20)})">
            <div class="dash-card-header">
                <div class="dash-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div>
                    <h3>Continuer la formation</h3>
                    <p>Jour ${Math.min(currentDay, 20)} — ${getDayTitle(Math.min(currentDay, 20))}</p>
                </div>
            </div>
        </div>
        <div class="dash-card" onclick="navigateTo('shortcuts')">
            <div class="dash-card-header">
                <div class="dash-card-icon yellow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h8"/></svg>
                </div>
                <div>
                    <h3>Raccourcis clavier</h3>
                    <p>Tous les raccourcis ARCHICAD essentiels</p>
                </div>
            </div>
        </div>
        <div class="dash-card" onclick="navigateTo('resources')">
            <div class="dash-card-header">
                <div class="dash-card-icon green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <div>
                    <h3>Ressources</h3>
                    <p>Liens utiles, documentation, tutoriels</p>
                </div>
            </div>
        </div>
        <div class="dash-card" onclick="navigateTo('notes')">
            <div class="dash-card-header">
                <div class="dash-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                    <h3>Mon carnet</h3>
                    <p>Notes personnelles et récaps de séances</p>
                </div>
            </div>
        </div>
    </div>

    <div class="weeks-overview">
        <h2>Programme de formation</h2>
        ${FORMATION_DATA.weeks.map(week => {
            const wCompletedDays = week.days.filter(d => userProgress[d.id]).length;
            return `
            <div class="week-overview-card">
                <div class="week-overview-header">
                    <div class="week-overview-title">
                        <span class="week-num">S${week.id}</span>
                        <h3>${week.title}</h3>
                    </div>
                    <span class="week-overview-progress">${wCompletedDays}/${week.days.length} jours</span>
                </div>
                <div class="week-days-grid">
                    ${week.days.map(day => `
                        <div class="week-day-mini ${userProgress[day.id] ? 'completed' : ''} ${!userProgress[day.id] && day.id === Math.min(currentDay, 20) ? 'active-day' : ''}"
                             onclick="navigateToDay(${day.id})">
                            <div class="day-num">J${day.id}</div>
                            <div class="day-label">${day.title.length > 15 ? day.title.substring(0, 15) + '...' : day.title}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }).join('')}
    </div>`;
    
    document.getElementById('content-area').innerHTML = html;
}

function getDayTitle(dayId) {
    let title = '';
    FORMATION_DATA.weeks.forEach(week => {
        week.days.forEach(day => {
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
    const isCompleted = userProgress[day.id] || false;
    const dayChecklist = userChecklist[day.id] || {};
    
    let html = `
    <div class="day-view active">
        <div class="day-header">
            <div class="day-breadcrumb">
                <span onclick="navigateTo('dashboard')" style="cursor:pointer">Dashboard</span> / 
                Semaine ${day.week} / 
                <span>Jour ${day.id}</span>
            </div>
            <h1>${day.title}</h1>
            <p>${day.subtitle}</p>
            <div class="day-meta">
                <div class="day-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${day.duration}
                </div>
                <div class="day-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                    Semaine ${day.week} — Jour ${day.id}
                </div>
                <div class="day-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    ${isCompleted ? '✅ Terminé' : '🔵 En cours'}
                </div>
            </div>
        </div>

        <!-- Objectifs -->
        <div class="day-section">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                </div>
                <h3>Objectifs de la séance</h3>
                <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body open">
                <ul class="objectives-list">
                    ${day.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Points clés -->
        <div class="day-section">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon yellow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3>Points clés à retenir</h3>
                <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body open">
                <div class="key-points">
                    ${day.keyPoints.map(kp => `
                        <div class="key-point">
                            <h4>${kp.title}</h4>
                            <p>${kp.content}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Exercice -->
        <div class="day-section">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Exercice pratique</h3>
                <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body open">
                <div class="exercise-block">
                    <div class="exercise-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        ${day.exercise.title}
                    </div>
                    <p class="exercise-description">${day.exercise.description}</p>
                    <ol class="exercise-steps">
                        ${day.exercise.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>

        <!-- Checklist -->
        <div class="day-section">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Validation des acquis</h3>
                <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body open">
                <ul class="checklist">
                    ${day.checklist.map((item, i) => `
                        <li class="${dayChecklist[i] ? 'checked' : ''}" 
                            data-checklist="${day.id}-${i}"
                            onclick="toggleChecklistItem(${day.id}, ${i})">
                            <span class="check-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>

        <!-- FORMATEUR SECTION -->
        ${day.formateurGuide ? `
        <div class="formateur-section ${formateurMode ? 'visible' : ''}">

            <!-- ===== GUIDE DÉTAILLÉ DES MODULES ===== -->
            ${renderDetailedModules(day.id)}

            <!-- ===== GUIDE DE SÉANCE (existant) ===== -->
            <div class="day-section formateur-card">
                <div class="day-section-header" onclick="toggleSection(this)">
                    <div class="section-icon purple">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h3>
                        <span class="formateur-badge">Formateur</span>
                        Déroulé de la séance
                    </h3>
                    <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="day-section-body open">
                    <div class="formateur-content">
                        <!-- Introduction -->
                        <div class="tip-block">
                            <p><strong>💡 Introduction :</strong> ${day.formateurGuide.intro}</p>
                        </div>

                        <!-- Timing -->
                        <h4>⏱️ Planning horaire</h4>
                        <div class="timing-grid">
                            ${day.formateurGuide.timing.map(t => `
                                <div class="script-block">
                                    <h5><span class="timing-badge">${t.time}</span></h5>
                                    <p>${t.content}</p>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Tips -->
                        <h4>✅ Conseils pédagogiques</h4>
                        ${day.formateurGuide.tips.map(tip => `
                            <div class="tip-block">
                                <p>${tip}</p>
                            </div>
                        `).join('')}

                        <!-- Warnings -->
                        <h4>⚠️ Points de vigilance</h4>
                        ${day.formateurGuide.warnings.map(w => `
                            <div class="warning-block">
                                <p>${w}</p>
                            </div>
                        `).join('')}

                        <!-- Exercise solution -->
                        <h4>🔑 Solution de l'exercice</h4>
                        <div class="script-block">
                            <p>${day.formateurGuide.exerciseSolution}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== FAQ FORMATEUR ===== -->
            ${renderDetailedFaq(day.id)}

            <!-- ===== TRANSITION ===== -->
            ${renderDetailedTransition(day.id)}

            <!-- ===== NOTES FORMATEUR ===== -->
            <div class="day-section formateur-card">
                <div class="day-section-header" onclick="toggleSection(this)">
                    <div class="section-icon purple">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <h3>
                        <span class="formateur-badge">Formateur</span>
                        Mes notes personnelles
                    </h3>
                    <svg class="chevron-toggle open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="day-section-body open">
                    <div class="formateur-content">
                        <textarea class="formateur-notes-area" 
                                  id="formateur-note-${day.id}"
                                  placeholder="Notes personnelles sur cette séance — observations, ajustements, points à retravailler..."
                                  onblur="saveFormateurNote(${day.id})">${userNotes['formateur_' + day.id] || ''}</textarea>
                    </div>
                </div>
            </div>

        </div>
        ` : ''}

        <!-- Navigation -->
        <div class="day-navigation">
            ${day.id > 1 ? `
                <button class="day-nav-btn" onclick="navigateToDay(${day.id - 1})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Jour ${day.id - 1}
                </button>
            ` : '<div></div>'}
            
            <button class="complete-day-btn ${isCompleted ? 'completed' : ''}" 
                    id="complete-day-btn"
                    onclick="toggleDayComplete(${day.id})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>
                ${isCompleted ? 'Jour terminé' : 'Marquer comme terminé'}
            </button>

            ${day.id < 20 ? `
                <button class="day-nav-btn" onclick="navigateToDay(${day.id + 1})">
                    Jour ${day.id + 1}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            ` : '<div></div>'}
        </div>
    </div>`;
    
    document.getElementById('content-area').innerHTML = html;
}

// ==========================================
// RENDER: DETAILED FORMATEUR GUIDE HELPERS
// ==========================================
function renderDetailedModules(dayId) {
    const guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.moduleExplanations || guide.moduleExplanations.length === 0) return '';

    return guide.moduleExplanations.map((mod, modIndex) => `
        <div class="day-section formateur-card">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon formateur-module-icon">
                    <span class="module-emoji">${mod.icon || '📖'}</span>
                </div>
                <h3>
                    <span class="formateur-badge">Formateur</span>
                    ${mod.moduleTitle}
                    ${mod.duration ? `<span class="module-duration">${mod.duration}</span>` : ''}
                </h3>
                <svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body">
                <div class="formateur-content">
                    ${mod.detailedContent.map((item, itemIndex) => `
                        <div class="detailed-module-item">
                            <div class="detailed-module-header" onclick="toggleDetailedItem(this)">
                                <span class="detailed-module-number">${modIndex + 1}.${itemIndex + 1}</span>
                                <h4>${item.subtitle}</h4>
                                <svg class="chevron-toggle-mini open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                            <div class="detailed-module-body open">
                                <!-- Explication détaillée -->
                                <div class="detailed-explanation">
                                    <div class="detailed-label">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                        Explication pour le formateur
                                    </div>
                                    <p>${item.explanation}</p>
                                </div>

                                <!-- Ce qu'il faut dire -->
                                ${item.whatToSay ? `
                                <div class="detailed-whattosay">
                                    <div class="detailed-label speech">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                        Ce qu'il faut dire à l'apprenante
                                    </div>
                                    <blockquote>${item.whatToSay}</blockquote>
                                </div>
                                ` : ''}

                                <!-- Étapes de démonstration -->
                                ${item.demoSteps && item.demoSteps.length > 0 ? `
                                <div class="detailed-demo">
                                    <div class="detailed-label demo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                        Démonstration pas à pas
                                    </div>
                                    <ol class="demo-steps-list">
                                        ${item.demoSteps.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                </div>
                                ` : ''}

                                <!-- Message clé -->
                                ${item.keyMessage ? `
                                <div class="detailed-keymessage">
                                    <div class="detailed-label key">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                        Message clé à retenir
                                    </div>
                                    <p class="key-message-text">${item.keyMessage}</p>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderDetailedFaq(dayId) {
    const guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.faq || guide.faq.length === 0) return '';

    return `
        <div class="day-section formateur-card">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon formateur-faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3>
                    <span class="formateur-badge">Formateur</span>
                    Questions fréquentes de l'apprenante
                </h3>
                <svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body">
                <div class="formateur-content">
                    <div class="faq-list">
                        ${guide.faq.map((item, i) => `
                            <div class="faq-item" onclick="toggleFaqItem(this)">
                                <div class="faq-question">
                                    <span class="faq-q-label">Q${i+1}</span>
                                    <span>${item.question}</span>
                                    <svg class="chevron-toggle-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                                <div class="faq-answer">
                                    <span class="faq-a-label">R</span>
                                    <p>${item.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDetailedTransition(dayId) {
    const guide = typeof FORMATEUR_GUIDE_DETAILS !== 'undefined' ? FORMATEUR_GUIDE_DETAILS[dayId] : null;
    if (!guide || !guide.transitionToNextDay) return '';

    return `
        <div class="day-section formateur-card">
            <div class="day-section-header" onclick="toggleSection(this)">
                <div class="section-icon formateur-transition-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <h3>
                    <span class="formateur-badge">Formateur</span>
                    Transition vers le jour suivant
                </h3>
                <svg class="chevron-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="day-section-body">
                <div class="formateur-content">
                    <div class="transition-block">
                        <div class="detailed-label speech">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            Ce qu'il faut dire en fin de séance
                        </div>
                        <blockquote>${guide.transitionToNextDay}</blockquote>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleDetailedItem(header) {
    const body = header.nextElementSibling;
    const chevron = header.querySelector('.chevron-toggle-mini');
    body.classList.toggle('open');
    if (chevron) chevron.classList.toggle('open');
}

function toggleFaqItem(faqItem) {
    faqItem.classList.toggle('open');
    const chevron = faqItem.querySelector('.chevron-toggle-mini');
    if (chevron) chevron.classList.toggle('open');
}

function toggleSection(header) {
    const body = header.nextElementSibling;
    const chevron = header.querySelector('.chevron-toggle');
    body.classList.toggle('open');
    chevron.classList.toggle('open');
}

async function saveFormateurNote(dayId) {
    const textarea = document.getElementById(`formateur-note-${dayId}`);
    if (textarea) {
        userNotes['formateur_' + dayId] = textarea.value;
        await saveUserData(currentUser.uid, 'notes', userNotes);
    }
}

// ==========================================
// RENDER: SHORTCUTS
// ==========================================
function renderShortcuts() {
    let html = `
    <div class="shortcuts-page">
        <h1>Raccourcis clavier ARCHICAD</h1>
        <p>Les raccourcis essentiels pour travailler efficacement. Utilisez la recherche pour trouver rapidement un raccourci.</p>
        <input type="text" class="shortcut-search" id="shortcut-search" 
               placeholder="Rechercher un raccourci..." 
               oninput="filterShortcuts(this.value)">
        <div id="shortcuts-container">
            ${SHORTCUTS_DATA.categories.map(cat => `
                <div class="shortcut-category" data-category="${cat.name}">
                    <h3>${cat.name}</h3>
                    <div class="shortcuts-grid">
                        ${cat.shortcuts.map(s => `
                            <div class="shortcut-item" data-search="${s.label.toLowerCase()} ${s.keys.join(' ').toLowerCase()}">
                                <span class="shortcut-label">${s.label}</span>
                                <div class="shortcut-keys">
                                    ${s.keys.map(k => `<span class="key">${k}</span>`).join('<span style="color:var(--text-muted);font-size:11px">+</span>')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`;
    
    document.getElementById('content-area').innerHTML = html;
}

function filterShortcuts(query) {
    const q = query.toLowerCase();
    document.querySelectorAll('.shortcut-item').forEach(item => {
        const match = item.dataset.search.includes(q);
        item.style.display = match ? 'flex' : 'none';
    });
    document.querySelectorAll('.shortcut-category').forEach(cat => {
        const hasVisible = cat.querySelector('.shortcut-item[style="display: flex"]') || 
                          (q === '' ? true : cat.querySelector('.shortcut-item:not([style*="display: none"])'));
        cat.style.display = hasVisible ? 'block' : 'none';
    });
}

// ==========================================
// RENDER: RESOURCES
// ==========================================
function renderResources() {
    let html = `
    <div class="resources-page">
        <h1>Ressources utiles</h1>
        <p>Liens et outils complémentaires pour approfondir votre apprentissage d'ARCHICAD.</p>
        ${RESOURCES_DATA.map(cat => `
            <div class="resource-category">
                <h3>${cat.category}</h3>
                <div class="resources-list">
                    ${cat.items.map(item => `
                        <a href="${item.url}" target="_blank" rel="noopener" class="resource-item">
                            <div class="resource-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </div>
                            <div class="resource-info">
                                <h4>${item.title}</h4>
                                <p>${item.description}</p>
                            </div>
                            <svg class="resource-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    </div>`;
    
    document.getElementById('content-area').innerHTML = html;
}

// ==========================================
// RENDER: NOTES
// ==========================================
function renderNotes() {
    // Get all days for notes
    const allDays = [];
    FORMATION_DATA.weeks.forEach(week => {
        week.days.forEach(day => allDays.push(day));
    });
    
    let html = `
    <div class="notes-page">
        <h1>Mon carnet de notes</h1>
        <p>Prenez des notes pendant vos sessions de formation. Elles sont automatiquement sauvegardées.</p>
        
        <!-- General note -->
        <div class="note-card" style="margin-bottom: 32px; border-color: rgba(0, 166, 200, 0.2);">
            <div class="note-card-header">
                <h3>📌 Notes générales</h3>
            </div>
            <textarea class="note-textarea" id="note-general"
                      placeholder="Notes générales sur la formation..."
                      oninput="autoSaveNote('general')">${userNotes['general'] || ''}</textarea>
        </div>

        <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; margin-bottom: 16px;">Notes par séance</h2>
        <div class="notes-container">
            ${allDays.map(day => `
                <div class="note-card">
                    <div class="note-card-header">
                        <h3>Jour ${day.id} — ${day.title}</h3>
                        <span class="note-date">${userProgress[day.id] ? '✅ Terminé' : ''}</span>
                    </div>
                    <textarea class="note-textarea" id="note-day-${day.id}"
                              placeholder="Mes notes pour le jour ${day.id}..."
                              oninput="autoSaveNote('day_${day.id}')">${userNotes['day_' + day.id] || ''}</textarea>
                </div>
            `).join('')}
        </div>
    </div>`;
    
    document.getElementById('content-area').innerHTML = html;
}

let saveTimeout = null;
function autoSaveNote(key) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
        const textarea = document.getElementById(key === 'general' ? 'note-general' : `note-${key}`);
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
