function addUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function addIniciativa(iniciativa) {
    let iniciativas = JSON.parse(localStorage.getItem('iniciativas')) || [];
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

export { addUser, addIniciativa, getUsers, getIniciativas, updateUser, updateIniciativa, updateIniciativaEstado};