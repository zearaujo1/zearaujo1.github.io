<template>
  <div class="iniciativas-view">
    <NavBar />
    <div class="content">
      <h1>Visualizar Iniciativas</h1>
      <button @click="iniciarIniciativa">Iniciar Iniciativa</button>
      <div id="acceptedInitiativesContainer" class="initiatives-container">
        <div 
          v-for="iniciativa in iniciativasAceite" 
          :key="iniciativa.id" 
          class="col-lg-4 col-sm-6 wow fadeInUp" 
          data-wow-delay="0.1s"
        >
          <div class="service-item rounded pt-3 text-center" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="p-6">
              <img :src="getImageSrc(iniciativa.imagem)" :alt="iniciativa.titulo" class="img-fluid mb-4">
              <h5 style="color: #3C5837;">{{ iniciativa.titulo }}</h5>
              <p>{{ iniciativa.data }}</p>
              <p>{{ iniciativa.horaInicio }}</p>
              <p>{{ iniciativa.estado }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'; // Importe o componente NavBar
import { Iniciativa } from '../../../localstorage/iniciativa.js'; // Corrija o caminho de importação da classe Iniciativa

export default {
  name: 'IniciativasView',
  components: {
    NavBar
  },
  data() {
    return {
      iniciativasAceite: []
    };
  },
  mounted() {
    this.loadAcceptedInitiatives();
  },
  methods: {
    iniciarIniciativa() {
      // Lógica para iniciar uma iniciativa
      console.log('Iniciando iniciativa...');
    },
    loadAcceptedInitiatives() {
  // Recupera as iniciativas aceitas armazenadas na localStorage
  const iniciativas = JSON.parse(localStorage.getItem('iniciativasAceite')) || [];
  console.log('Dados recuperados do localStorage:', iniciativas); // Adicione este console.log
  // Converte os objetos em instâncias da classe Iniciativa
  this.iniciativasAceite = iniciativas.map(ini => new Iniciativa(
    ini.id, ini.colaboratorID, ini.titulo, ini.descricao, ini.estado, ini.nParticipantes,
    ini.listaParticipantes, ini.data, ini.horaInicio, ini.duracao, ini.satisfacaoMedia,
    ini.imagem, ini.materiais, ini.profissionais
  ));
},
    getImageSrc(imagePath) {
      try {
        return imagePath.startsWith('http') ? imagePath : require(`@/assets/${imagePath}`);
      } catch (e) {
        return require('@/assets/img/default.jpg');
      }
    }
  }
}
</script>

<style scoped>
.iniciativas-view {
  background-color: #ccffcc; /* Fundo verde claro */
  height: 100vh; /* Altura total da tela */
  display: flex;
  flex-direction: column; /* Ajuste para alinhar NavBar e conteúdo verticalmente */
}

.content {
  text-align: center;
  margin-top: 20px; /* Espaçamento superior */
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #008000; /* Cor verde */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #006400; /* Cor verde mais escura ao passar o mouse */
}

.initiatives-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.service-item img {
  max-width: 100%;
}
</style>