document.addEventListener('DOMContentLoaded', function() {
    // Recupera as informações do usuário da localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se há usuários na localStorage
    if (users.length > 0) {
        // Define os valores dos elementos HTML com base nos valores armazenados
        document.getElementById('profile-img').src = users[0].pictureURL;
        document.getElementById('name').textContent = users[0].name;
        document.getElementById('email').textContent = users[0].email;
        document.getElementById('rule').textContent = users[0].rule;
    }
});
