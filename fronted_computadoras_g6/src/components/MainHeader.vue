<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Para un desplazamiento suave, si es compatible
  })
}
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 d-flex flex-wrap">
          <p class="d-flex me-4 mb-0">
            <i class="bi-person custom-icon me-2"></i>
            <strong class="text-dark">Bienvenido a IT Pro</strong>
          </p>
        </div>
      </div>
    </div>
  </header>

  <nav
    class="navbar navbar-expand-lg"
    :style="'background-color:' + (location.path != '/' ? 'black' : '')"
  >
    <div class="container">
      <a class="navbar-brand" href="index.html"> IT Pro </a>

      <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4"
        >Iniciar Sesión</RouterLink
      >
      <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-none ms-auto me-4">Salir</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <!-- <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_1">Inicio</a>
          </li> -->
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/compras" class="nav-link click-scroll">Catálogo</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_2">Acerca de</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_3">Novedades</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_4">Promociones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_5">Black Friday</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_6">Contacto</a>
          </li>
          <slot v-if="authStore.token">
            <li class="nav-item">
              <div class="mainheader">
                <div class="dropdown">
                  <a class="nav-link click-scroll"><font-awesome-icon icon="fa fa-user-gear" /> Admin</a>
                  <div class="dropdown-content" :style="'background-color:' + (location.path != '/' ? 'black' : '')">
                    <RouterLink to="/empleados" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-user-tie" /> Empleados</RouterLink>
                    <RouterLink to="/clientes" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-child-reaching" /> Clientes</RouterLink>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div class="mainheader">
                <div class="dropdown">
                  <a class="nav-link click-scroll"><font-awesome-icon icon="fa fa-microchip" /> Inventario</a>
                  <div class="dropdown-content" :style="'background-color:' + (location.path != '/' ? 'black' : '')">
                    <RouterLink to="/categorias" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-list" /> Categorías</RouterLink>
                    <RouterLink to="/productos" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-computer" /> Productos</RouterLink>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div class="mainheader">
                <div class="dropdown">
                  <a class="nav-link click-scroll"><font-awesome-icon icon="fa fa-shop" /> Inventario </a>
                  <div class="dropdown-content" :style="'background-color:' + (location.path != '/' ? 'black' : '')">
                    <RouterLink to="/pedidos" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-truck-fast" /> Pedidos</RouterLink>
                    <RouterLink to="/solicitudes" class="nav-link click-scroll"><font-awesome-icon icon="fa fa-earth-americas" /> Online</RouterLink>
                  </div>
                </div>
              </div>
            </li>
          </slot>
        </ul>
        <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-block d-none"
          >Iniciar Sesión</RouterLink
        >
        <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-block d-none">Salir</a>
      </div>
    </div>
    <button class="btn-flotante custom-btn" @click="scrollToTop">
      <font-awesome-icon icon="fa-solid fa-arrow-up" />
    </button>
  </nav>
</template>

<style>
.btn-flotante {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  background-color: #ff0400;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}

/* Estilo para el contenedor principal */
.mainheader {
  display: flex;
  justify-content: flex-end; /* Ajusta la alineación del menú desplegable a la derecha */
}

/* Estilo para el botón del menú desplegable */
.dropbtn {
  background-color: transparent;
  color: transparent;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Estilo para el contenido del menú desplegable */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Estilo para los elementos del menú desplegable */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Cambia el color del enlace cuando el ratón pasa sobre él */
.dropdown-content a:hover {
  background-color: transparent;
}

/* Muestra el menú desplegable cuando el mouse pasa sobre el botón */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>
