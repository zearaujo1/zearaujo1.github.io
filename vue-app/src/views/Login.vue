<template>
  <div class="page">
    <div class="header">
      <img src="/img/logo.png" alt="Logo" class="logo spin">
    </div>
    <button id="google-login-btn" class="btn btn-primary google-button" @click="loginWithGoogle">
      <i class="fab fa-google"></i> Login Google
    </button>
    <button id="logout-btn" class="btn btn-primary logout-button" v-if="isLoggedIn" @click="logout">
      <i class="fas fa-sign-out-alt"></i> Logout
    </button>
  </div>
</template>

<style>
.page {
  background-color: #c2e5c2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  margin-top: 20px;
}

.logo {
  width: 200px;
  height: auto;
}

.google-button {
  background-color: #4285F4;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.google-button:hover {
  background-color: #2d76f1;
}

.logout-button {
  margin-top: 20px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Importe o Vue Router
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Rj0nJFDf-CnxV-ZuG1j1URRrO6iMVLc",
  authDomain: "login-e7f54.firebaseapp.com",
  projectId: "login-e7f54",
  storageBucket: "login-e7f54.appspot.com",
  messagingSenderId: "44551396299",
  appId: "1:44551396299:web:43bab556502893052a744e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const isLoggedIn = ref(false);
const router = useRouter(); // Obtenha a instância do Vue Router

function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      saveUserInfo(user);
      isLoggedIn.value = true;
      
      // Redirecione para a página "Iniciativas"
      router.push({ name: 'Iniciativas' });
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
}

function logout() {
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false;
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error during sign-out:", error);
    });
}

function saveUserInfo(user) {
  if (user) {
    // Implemente a lógica para salvar as informações do usuário, se necessário
  }
}

function updateUI(user) {
  isLoggedIn.value = !!user;
}

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    updateUI(user);
  });
});
</script>