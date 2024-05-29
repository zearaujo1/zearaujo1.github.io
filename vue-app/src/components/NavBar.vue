<template>
  <div class="navbar">
    <img src="/img/logo.png" alt="Logo" class="navbar-logo">
    <div class="navbar-buttons-container">
      <div class="navbar-buttons">
        <router-link to="/agenda" class="navbar-button">Agenda</router-link>
        <router-link to="/mapa" class="navbar-button">Mapa</router-link>
      </div>
      <button class="navbar-button" v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth'; // Importe as funções necessárias para logout
import { useRouter } from 'vue-router'; // Importe o Vue Router

export default {
  name: 'Navbar',
  props: {
    isLoggedIn: Boolean, // Definindo a propriedade isLoggedIn como um Boolean
  },
  setup(props) {
    const router = useRouter(); // Obtenha a instância do Vue Router

    // Função de logout
    const logout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          window.location.href = "/"; // Redirecione para a página inicial ou para onde preferir
        })
        .catch((error) => {
          console.error("Error during sign-out:", error);
        });
    };

    return { logout };
  },
};
</script>

<style>
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #008000;
  display: flex;
  align-items: center;
  padding: 10px;
}

.navbar-logo {
  height: 50px;
  width: auto;
  margin-left: 10px;
}

.navbar-buttons-container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.navbar-buttons {
  display: flex;
}

.navbar-button {
  background-color: #006400;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px; /* Ajusta a altura dos botões para corresponder à altura da imagem */
}

.navbar-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
</style>