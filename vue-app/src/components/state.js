import { ref } from 'vue';

// Estado reativo para controlar a visibilidade da Sidebar
export const isSidebarOpen = ref(false);

// Função para alternar o estado da Sidebar
export const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};