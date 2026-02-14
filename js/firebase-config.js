// ==========================================
// FIREBASE CONFIGURATION
// AtelierLO — Formation ARCHICAD
// ==========================================
// 
// INSTRUCTIONS DE CONFIGURATION :
// 1. Allez sur https://console.firebase.google.com
// 2. Créez un projet (ex: "atelierlo-formation")
// 3. Activez Authentication > Email/Password
// 4. Créez le compte formateur : formateur@atelierlo.fr / formation2026
// 5. Activez Firestore Database (mode test pour commencer)
// 6. Copiez votre config Firebase ci-dessous
// 
// SYSTÈME MULTI-UTILISATEURS :
// - Le formateur peut CRÉER des comptes apprenants directement depuis la plateforme
// - Chaque nouvel apprenant reçoit un email et mot de passe générés automatiquement
// - Le formateur peut voir/copier les identifiants, réinitialiser un mot de passe, supprimer un compte
// - Chaque apprenant a ses propres données isolées (progression, quiz, notes...)
// - Le formateur peut voir la progression de TOUS ses apprenants via "Gestion élèves"
// - En mode local, les comptes sont stockés dans localStorage
// - En mode Firebase, les comptes sont stockés dans Firestore
//
// RÈGLES FIRESTORE : voir firestore.rules

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD2l_zq2JMLdDlEBK-8UxyA3Bd_C4KLehM",
    authDomain: "lo-archicad-formation.firebaseapp.com",
    projectId: "lo-archicad-formation",
    storageBucket: "lo-archicad-formation.firebasestorage.app",
    messagingSenderId: "772093978084",
    appId: "1:772093978084:web:b5beab9ee8f381b6c013f1"
};

// ==========================================
// MODE LOCAL (sans Firebase)
// Tant que Firebase n'est pas configuré,
// l'app fonctionne en mode local avec localStorage
// ==========================================
const USE_FIREBASE = FIREBASE_CONFIG.apiKey !== "VOTRE_API_KEY";

// Comptes de démonstration (mode local)
const DEMO_ACCOUNTS = {
    "formateur@atelierlo.fr": {
        password: "formation2026",
        role: "formateur",
        name: "Lucien",
        uid: "formateur-001"
    }
};

// Charger les comptes créés dynamiquement depuis localStorage
function loadDynamicAccounts() {
    var saved = localStorage.getItem('atelierlo_dynamic_accounts');
    if (saved) {
        var accounts = JSON.parse(saved);
        Object.keys(accounts).forEach(function(email) {
            DEMO_ACCOUNTS[email] = accounts[email];
        });
    }
}

// Sauvegarder les comptes dynamiques
function saveDynamicAccounts() {
    var dynamic = {};
    Object.keys(DEMO_ACCOUNTS).forEach(function(email) {
        if (DEMO_ACCOUNTS[email].role === 'apprenant') {
            dynamic[email] = DEMO_ACCOUNTS[email];
        }
    });
    localStorage.setItem('atelierlo_dynamic_accounts', JSON.stringify(dynamic));
}

// Générer un identifiant unique
function generateUid() {
    return 'apprenant-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 5);
}

// Générer un mot de passe aléatoire (8 caractères, lisible)
function generatePassword() {
    var chars = 'abcdefghjkmnpqrstuvwxyz23456789';
    var pwd = '';
    for (var i = 0; i < 8; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pwd;
}

// Générer un email à partir du nom
function generateEmail(firstName, lastName) {
    var clean = function(str) {
        return str.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z]/g, '');
    };
    var base = clean(firstName) + '.' + clean(lastName) + '@atelierlo.fr';
    // Vérifier unicité
    if (DEMO_ACCOUNTS[base]) {
        var counter = 2;
        while (DEMO_ACCOUNTS[clean(firstName) + '.' + clean(lastName) + counter + '@atelierlo.fr']) {
            counter++;
        }
        base = clean(firstName) + '.' + clean(lastName) + counter + '@atelierlo.fr';
    }
    return base;
}

// Créer un nouvel apprenant
async function createApprenant(firstName, lastName) {
    var email = generateEmail(firstName, lastName);
    var password = generatePassword();
    var uid = generateUid();
    var name = firstName + ' ' + lastName;

    if (USE_FIREBASE && firebaseDb && firebaseAuth) {
        // En mode Firebase : créer l'utilisateur via Admin SDK ou Cloud Function
        // Pour l'instant, on ajoute dans Firestore (l'admin créera le compte Auth manuellement)
        await firebaseDb.collection('users').doc(uid).set({
            name: name,
            email: email,
            role: 'apprenant',
            password: password, // Stocké pour que le formateur puisse le communiquer
            createdAt: new Date().toISOString(),
            createdBy: 'formateur'
        });
    }

    // Mode local : ajouter au DEMO_ACCOUNTS
    DEMO_ACCOUNTS[email] = {
        password: password,
        role: 'apprenant',
        name: name,
        uid: uid,
        createdAt: new Date().toISOString()
    };
    saveDynamicAccounts();

    return { email: email, password: password, name: name, uid: uid };
}

// Supprimer un apprenant
async function deleteApprenant(email) {
    if (USE_FIREBASE && firebaseDb) {
        var account = DEMO_ACCOUNTS[email];
        if (account) {
            // Supprimer les données Firestore
            try {
                await firebaseDb.collection('users').doc(account.uid).delete();
                await firebaseDb.collection('userData').doc(account.uid).delete();
            } catch(e) { console.warn('Erreur suppression Firestore:', e); }
        }
    }

    // Supprimer en local
    if (DEMO_ACCOUNTS[email]) {
        var uid = DEMO_ACCOUNTS[email].uid;
        delete DEMO_ACCOUNTS[email];
        localStorage.removeItem('atelierlo_' + uid);
        saveDynamicAccounts();
        return true;
    }
    return false;
}

// Réinitialiser le mot de passe d'un apprenant
function resetApprenantPassword(email) {
    if (DEMO_ACCOUNTS[email] && DEMO_ACCOUNTS[email].role === 'apprenant') {
        var newPwd = generatePassword();
        DEMO_ACCOUNTS[email].password = newPwd;
        saveDynamicAccounts();
        return newPwd;
    }
    return null;
}

// Charger les comptes dynamiques au démarrage
loadDynamicAccounts();

// Firebase init (si configuré)
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;

function initFirebase() {
    if (USE_FIREBASE && typeof firebase !== 'undefined') {
        try {
            firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
            firebaseAuth = firebase.auth();
            firebaseDb = firebase.firestore();
            console.log('✅ Firebase initialisé');
        } catch (e) {
            console.warn('⚠️ Firebase non disponible, mode local activé', e);
        }
    } else {
        console.log('ℹ️ Mode local activé (Firebase non configuré)');
    }
}

// Auth functions
async function firebaseLogin(email, password) {
    if (USE_FIREBASE && firebaseAuth) {
        const cred = await firebaseAuth.signInWithEmailAndPassword(email, password);
        const uid = cred.user.uid;
        const userEmail = cred.user.email;
        
        // Vérifier si le profil utilisateur existe dans Firestore
        const doc = await firebaseDb.collection('users').doc(uid).get();
        
        if (doc.exists && doc.data().role) {
            return {
                uid: uid,
                email: userEmail,
                ...doc.data()
            };
        }
        
        // Profil inexistant — le créer automatiquement
        // Déterminer le rôle : formateur si email connu, sinon apprenant
        const isFormateur = (userEmail === 'formateur@atelierlo.fr');
        const profile = {
            role: isFormateur ? 'formateur' : 'apprenant',
            name: isFormateur ? 'Formateur' : userEmail.split('@')[0].replace(/[._]/g, ' ')
        };
        
        // Vérifier aussi dans les comptes dynamiques (créés par le formateur)
        await loadDynamicAccounts();
        if (DEMO_ACCOUNTS[userEmail]) {
            profile.role = DEMO_ACCOUNTS[userEmail].role;
            profile.name = DEMO_ACCOUNTS[userEmail].name;
        }
        
        // Sauvegarder le profil dans Firestore
        await firebaseDb.collection('users').doc(uid).set(profile);
        
        return {
            uid: uid,
            email: userEmail,
            ...profile
        };
    } else {
        // Mode local
        const account = DEMO_ACCOUNTS[email];
        if (account && account.password === password) {
            return {
                uid: account.uid,
                email: email,
                role: account.role,
                name: account.name
            };
        }
        throw new Error("Email ou mot de passe incorrect");
    }
}

function firebaseLogout() {
    if (USE_FIREBASE && firebaseAuth) {
        return firebaseAuth.signOut();
    }
}

// Data persistence functions
async function saveUserData(userId, key, data) {
    if (USE_FIREBASE && firebaseDb) {
        await firebaseDb.collection('userData').doc(userId).set(
            { [key]: data },
            { merge: true }
        );
    } else {
        const stored = JSON.parse(localStorage.getItem(`atelierlo_${userId}`) || '{}');
        stored[key] = data;
        localStorage.setItem(`atelierlo_${userId}`, JSON.stringify(stored));
    }
}

async function loadUserData(userId, key) {
    if (USE_FIREBASE && firebaseDb) {
        const doc = await firebaseDb.collection('userData').doc(userId).get();
        if (doc.exists) {
            return doc.data()[key];
        }
        return null;
    } else {
        const stored = JSON.parse(localStorage.getItem(`atelierlo_${userId}`) || '{}');
        return stored[key] || null;
    }
}

// ==========================================
// MULTI-USER: list all apprenants
// ==========================================

// Get list of all apprenant accounts
async function getAllApprenants() {
    if (USE_FIREBASE && firebaseDb) {
        // In Firebase mode: query users collection for role=apprenant
        const snapshot = await firebaseDb.collection('users')
            .where('role', '==', 'apprenant').get();
        var apprenants = [];
        snapshot.forEach(function(doc) {
            apprenants.push({
                uid: doc.id,
                name: doc.data().name || 'Sans nom',
                email: doc.data().email || '',
                role: 'apprenant'
            });
        });
        return apprenants;
    } else {
        // Local mode: list from DEMO_ACCOUNTS
        var apprenants = [];
        Object.keys(DEMO_ACCOUNTS).forEach(function(email) {
            var account = DEMO_ACCOUNTS[email];
            if (account.role === 'apprenant') {
                apprenants.push({
                    uid: account.uid,
                    name: account.name,
                    email: email,
                    role: 'apprenant'
                });
            }
        });
        return apprenants;
    }
}

// Load all data for one apprenant (used by formateur dashboard)
async function loadAllApprenantData(userId) {
    var data = {};
    var keys = ['progress', 'checklist', 'quizScores', 'timeSpent', 'notes', 'evaluation'];
    for (var i = 0; i < keys.length; i++) {
        data[keys[i]] = await loadUserData(userId, keys[i]) || {};
    }
    return data;
}

// Load summary data for all apprenants (for formateur overview)
async function loadAllApprenantsData() {
    var apprenants = await getAllApprenants();
    var result = [];
    for (var i = 0; i < apprenants.length; i++) {
        var data = await loadAllApprenantData(apprenants[i].uid);
        result.push({
            info: apprenants[i],
            data: data
        });
    }
    return result;
}

// ==========================================
// MESSAGING SYSTEM (shared between formateur & apprenants)
// ==========================================
// Messages are stored globally (not per-user) so both parties see the conversation.
// Key structure: messages are organized by dayId + studentUid for each thread.

// Save a message to a conversation thread
async function saveMessage(studentUid, dayId, message) {
    var threadKey = studentUid + '_day' + dayId;
    if (USE_FIREBASE && firebaseDb) {
        var threadRef = firebaseDb.collection('messages').doc(threadKey);
        var doc = await threadRef.get();
        var messages = doc.exists ? (doc.data().messages || []) : [];
        messages.push(message);
        await threadRef.set({ messages: messages, studentUid: studentUid, dayId: dayId, updatedAt: new Date().toISOString() }, { merge: true });
    } else {
        var allMessages = JSON.parse(localStorage.getItem('atelierlo_messages') || '{}');
        if (!allMessages[threadKey]) allMessages[threadKey] = [];
        allMessages[threadKey].push(message);
        localStorage.setItem('atelierlo_messages', JSON.stringify(allMessages));
    }
}

// Load messages for a specific thread (studentUid + dayId)
async function loadThreadMessages(studentUid, dayId) {
    var threadKey = studentUid + '_day' + dayId;
    if (USE_FIREBASE && firebaseDb) {
        var doc = await firebaseDb.collection('messages').doc(threadKey).get();
        return doc.exists ? (doc.data().messages || []) : [];
    } else {
        var allMessages = JSON.parse(localStorage.getItem('atelierlo_messages') || '{}');
        return allMessages[threadKey] || [];
    }
}

// Load ALL messages across all threads (for formateur inbox)
async function loadAllMessages() {
    if (USE_FIREBASE && firebaseDb) {
        var snapshot = await firebaseDb.collection('messages').get();
        var result = {};
        snapshot.forEach(function(doc) {
            result[doc.id] = doc.data();
        });
        return result;
    } else {
        return JSON.parse(localStorage.getItem('atelierlo_messages') || '{}');
    }
}

// Mark messages in a thread as read by a specific role
async function markThreadRead(studentUid, dayId, role) {
    var threadKey = studentUid + '_day' + dayId;
    if (USE_FIREBASE && firebaseDb) {
        var doc = await firebaseDb.collection('messages').doc(threadKey).get();
        if (doc.exists) {
            var messages = doc.data().messages || [];
            var changed = false;
            messages.forEach(function(m) {
                if (m.role !== role && !m.readBy) { m.readBy = role; changed = true; }
                else if (m.role !== role && m.readBy && m.readBy.indexOf(role) === -1) { m.readBy += ',' + role; changed = true; }
            });
            if (changed) {
                await firebaseDb.collection('messages').doc(threadKey).update({ messages: messages });
            }
        }
    } else {
        var allMessages = JSON.parse(localStorage.getItem('atelierlo_messages') || '{}');
        if (allMessages[threadKey]) {
            allMessages[threadKey].forEach(function(m) {
                if (m.role !== role && !m.readBy) m.readBy = role;
                else if (m.role !== role && m.readBy && m.readBy.indexOf(role) === -1) m.readBy += ',' + role;
            });
            localStorage.setItem('atelierlo_messages', JSON.stringify(allMessages));
        }
    }
}

// Count unread messages for a given role across all threads
async function countUnreadMessages(role) {
    var allMsgs = await loadAllMessages();
    var count = 0;
    Object.keys(allMsgs).forEach(function(threadKey) {
        var messages = allMsgs[threadKey];
        // allMsgs can have messages array or be raw array depending on storage
        var msgArray = Array.isArray(messages) ? messages : (messages.messages || []);
        msgArray.forEach(function(m) {
            if (m.role !== role) {
                if (!m.readBy || m.readBy.indexOf(role) === -1) count++;
            }
        });
    });
    return count;
}

// Initialize
initFirebase();
