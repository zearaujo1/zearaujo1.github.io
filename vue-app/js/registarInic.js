import { Iniciativa } from "/localstorage/iniciativa.js";
import { addIniciativa } from "/localstorage/localstorage.js";

document.getElementById('initiativeForm').addEventListener('submit', function(e) {
e.preventDefault(); // Impede o envio do formulário

// Captura os valores dos campos do formulário
const titulo = document.getElementById('titulo').value;
const startHour = document.getElementById('startHour').value;
const datetime = document.getElementById('datetime').value;
const duration = document.getElementById('hora').value;
const description = document.getElementById('message').value;


const newIniciativa = new Iniciativa(
    '', // id
    '', // colaboratorID
    titulo,
    description,
    'pendente', // estado inicial
    0, // nParticipantes inicial
    [], // listaParticipantes inicial
    datetime,
    startHour,
    duration,
    '', // satisfacaoMedia inicial
    '', // imagem inicial
    [], // materiais inicial
    []  // profissionais inicial
);
// Cria um objeto com os dados do formulário
addIniciativa(newIniciativa);

console.log('Iniciativa salva:', newIniciativa);
console.log('Iniciativas no localStorage:', JSON.parse(localStorage.getItem('iniciativas')));

// // Limpa o formulário
document.getElementById('initiativeForm').reset();

alert('Iniciativa registrada com sucesso!');
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
