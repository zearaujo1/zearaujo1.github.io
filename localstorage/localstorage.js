import { User } from '/localstorage/user.js'; 

function addUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function addIniciativa(iniciativa) {
    let iniciativas = JSON.parse(localStorage.getItem('iniciativas')) || [];
    // Define o ID autoincrementado
    let nextId = 1;
    if (iniciativas.length > 0) {
        nextId = iniciativas[iniciativas.length - 1].id;
        nextId++;
    }
    iniciativa.id = nextId;
    iniciativas.push(iniciativa);
    localStorage.setItem('iniciativas', JSON.stringify(iniciativas));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function getIniciativas() {
    return JSON.parse(localStorage.getItem('iniciativas')) || [];
}

function updateUser(updatedUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => user.userId === updatedUser.userId ? updatedUser : user);
    localStorage.setItem('users', JSON.stringify(users));
}

function updateIniciativa(updatedIniciativa) {
    let iniciativas = JSON.parse(localStorage.getItem('iniciativas')) || [];
    iniciativas = iniciativas.map(iniciativa => iniciativa.titulo === updatedIniciativa.titulo ? updatedIniciativa : iniciativa);
    localStorage.setItem('iniciativas', JSON.stringify(iniciativas));
}

// Função para atualizar o estado de uma iniciativa
function updateIniciativaEstado(id, newEstado) {
    // Recupera todas as iniciativas do localStorage
    let iniciativas = JSON.parse(localStorage.getItem('iniciativas')) || [];

    // Encontra a iniciativa com o ID correspondente e atualiza seu estado
    iniciativas = iniciativas.map(iniciativa => {
        if (iniciativa.id === id) {
            iniciativa.estado = newEstado;
        }
        return iniciativa;
    });

    // Atualiza o localStorage com as mudanças
    localStorage.setItem('iniciativas', JSON.stringify(iniciativas));
}

function adicionarUsers(){
    addUser(new User('1','Jorge Vilaverde', 'jorgevilaverde@example.com', 'colaborador', 'https://img.freepik.com/fotos-gratis/celebracao-do-dia-internacional-da-educacao_23-2150931022.jpg?w=1800&t=st=1716943732~exp=1716944332~hmac=16cd9109576464862f4576c4ce2194eacf252bd06338cd19b939dbd391359007'));
    addUser(new User('2','Joana Vilaverde', 'jane@example.com', 'user', 'https://img.freepik.com/fotos-gratis/homem-com-os-bracos-cruzados_1368-9618.jpg?w=1060&t=st=1716943749~exp=1716944349~hmac=d0e6e10a202c4b33e3af8840899efb5e3627c00b7a3768f585cdcfc95c63623f'));
    addUser(new User('3','Tomás Matias', 'alice@example.com', 'user', 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=2000&t=st=1716943760~exp=1716944360~hmac=62f6c8467f160589501047b03e707ad5a05d40e0ef95d76dce7e6b0c5561313a'));
    console.log(getUsers());
    // Obter todos os usuários
}

export { addUser, addIniciativa, getUsers, getIniciativas, updateUser, updateIniciativa, updateIniciativaEstado, adicionarUsers};