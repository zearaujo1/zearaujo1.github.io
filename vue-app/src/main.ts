import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importe as funções necessárias do SDK que você precisa
import { initializeApp } from "firebase/app";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5Rj0nJFDf-CnxV-ZuG1j1URRrO6iMVLc",
  authDomain: "login-e7f54.firebaseapp.com",
  projectId: "login-e7f54",
  storageBucket: "login-e7f54.appspot.com",
  messagingSenderId: "44551396299",
  appId: "1:44551396299:web:43bab556502893052a744e"
};

// Inicialize o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Crie o aplicativo Vue
const app = createApp(App);

// Adicione o router ao aplicativo Vue
app.use(router);

// Monte o aplicativo Vue
app.mount('#app');