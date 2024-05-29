import { Iniciativa } from "/localstorage/iniciativa.js";
import { addIniciativa } from "/localstorage/localstorage.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

document.getElementById("initiativeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos do formulário
    const titulo = document.getElementById("titulo").value;
    const startHour = document.getElementById("startHour").value;
    const datetime = document.getElementById("datetime").value;
    const duration = document.getElementById("hora").value;
    const description = document.getElementById("message").value;

    const firebaseConfig = {
      apiKey: "AIzaSyD5Rj0nJFDf-CnxV-ZuG1j1URRrO6iMVLc",
      authDomain: "login-e7f54.firebaseapp.com",
      projectId: "login-e7f54",
      storageBucket: "login-e7f54.appspot.com",
      messagingSenderId: "44551396299",
      appId: "1:44551396299:web:43bab556502893052a744e",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    let uid = null;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in");
        uid = user.uid;
        const newIniciativa = new Iniciativa(
            uid, // colaboratorID
            titulo,
            description,
            "pendente", // estado inicial
            datetime,
            startHour,
            duration,
            "", // imagem inicial
            [], // materiais inicial
            [] // profissionais inicial
          );
          addIniciativa(newIniciativa);
        console.log("User ID:", uid);
      } else {
        alert("User is not signed in");
        return;
      }
    });

    // // Limpa o formulário
    document.getElementById("initiativeForm").reset();

    alert("Iniciativa registrada com sucesso!");
  });

// function saveImage() {
// const fileInput = document.getElementById('image-upload');
// const file = fileInput.files[0];

// if (file) {
// const reader = new FileReader();
// reader.onload = function(event) {
//  const imageData = event.target.result;

//  // Adiciona a imagem à LocalStorage
//  let initiatives = JSON.parse(localStorage.getItem('new_initiatives')) || [];
//  if (initiatives.length > 0) {
//      initiatives[initiatives.length - 1].imagem = imageData;
//      localStorage.setItem('new_initiatives', JSON.stringify(initiatives));
//      alert('Imagem salva com sucesso!');
//  } else {
//      alert('Registre uma iniciativa primeiro.');
//  }
// };
// reader.readAsDataURL(file);
// } else {
// alert('Nenhuma imagem escolhida.');
// }
