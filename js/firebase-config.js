// ==========================================
// FIREBASE CONFIGURATION
// AtelierLO — Formation ARCHICAD
// ==========================================
// 
// INSTRUCTIONS DE CONFIGURATION :
// 1. Allez sur https://console.firebase.google.com
// 2. Créez un projet (ex: "atelierlo-formation")
// 3. Activez Authentication > Email/Password
// 4. Créez 2 utilisateurs :
//    - Formateur : votre email (rôle sera défini dans Firestore)
//    - Apprenant : email de la stagiaire
// 5. Activez Firestore Database (mode test pour commencer)
// 6. Copiez votre config Firebase ci-dessous
// 7. Dans Firestore, créez une collection "users" avec 2 documents :
//    - Document ID = UID du formateur : { role: "formateur", name: "Lucien", email: "..." }
//    - Document ID = UID de l'apprenant : { role: "apprenant", name: "Prénom", email: "..." }
//
// RÈGLES FIRESTORE (à coller dans les règles de sécurité) :
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /users/{userId} {
//       allow read, write: if request.auth != null && request.auth.uid == userId;
//     }
//     match /progress/{userId} {
//       allow read, write: if request.auth != null;
//     }
//     match /notes/{noteId} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

const FIREBASE_CONFIG = {
    // ⚠️ REMPLACEZ CES VALEURS par votre configuration Firebase
    apiKey: "VOTRE_API_KEY",
    authDomain: "votre-projet.firebaseapp.com",
    projectId: "votre-projet",
    storageBucket: "votre-projet.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
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
    },
    "apprenant@atelierlo.fr": {
        password: "archicad2026",
        role: "apprenant",
        name: "Apprenant(e)",
        uid: "apprenant-001"
    }
};

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
        const doc = await firebaseDb.collection('users').doc(cred.user.uid).get();
        return {
            uid: cred.user.uid,
            email: cred.user.email,
            ...doc.data()
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

// Initialize
initFirebase();
