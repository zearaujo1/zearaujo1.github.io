import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { User } from "/localStorage/user.js";
import { addUser } from "/localStorage/localstorage.js";

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