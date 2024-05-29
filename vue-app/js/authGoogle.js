import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { User } from "/localstorage/user"; // Corrigindo o caminho de importação
import { addUser } from "/localstorage/localstorage"; // Corrigindo o caminho de importação

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", function() {
  const googleLogin = document.getElementById("google-login-btn");
  const logoutBtn = document.getElementById("logout-btn");

  function updateUI(user) {
    if (user) {
      if (googleLogin) googleLogin.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "block";
    } else {
      if (googleLogin) googleLogin.style.display = "block";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }

  function checkAuthState() {
    onAuthStateChanged(auth, (user) => {
      updateUI(user);
    });
  }

  if (googleLogin) {
    googleLogin.addEventListener("click", function() {
      console.log("Login button clicked");
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("Sign in successful");
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log(user);
          setTimeout(() => {
            console.log("Redirecting...");
            window.location.href = "perfil.html";
          }, 5000);
          saveUserInfo(user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during sign-in:", errorCode, errorMessage);
        });
    });
}
   

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      signOut(auth).then(() => {
        // Atualiza a UI para mostrar o botão de login e esconder o de logout
        updateUI(null);
        // Redireciona para a página de login após o logout
        window.location.href = "index.html";
      }).catch((error) => {
        console.error("Error during sign-out:", error);
      });
    });
  }

  // Verifica o estado de autenticação quando a página é carregada
  checkAuthState(); 
});


function saveUserInfo(user){
  if(user){
    const newUser = new User(
      user.uid,
      user.displayName,
      user.email,
      'user',
      user.photoURL
    );

    addUser(newUser);
  }
}

function loadUserProfileFromLocalStorage() {
  const user = getUserInfoFromLocalStorage();
  if (user) {
    document.getElementById("nome").textContent = user.displayName;
    document.getElementById("dataNascimento").textContent = user.birthDate;
    document.getElementById("telemovel").textContent = user.phone;
    document.getElementById("email").textContent = user.email;
    document.getElementById("morada").textContent = user.address;
  }
}

// Função para recuperar os dados do usuário do localStorage
function getUserInfoFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData;
}