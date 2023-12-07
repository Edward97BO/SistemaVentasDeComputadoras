<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const nombre = ref('')
const apellidos = ref('')
const email = ref('')
const telefono = ref('')
const direccion = ref('')

async function crearCliente() {
  await http
    .post(ENDPOINT, {
      usuario: usuario.value,
      nombre: nombre.value,
      apellidos: apellidos.value,
      email: email.value,
      telefono: telefono.value,
      direccion: direccion.value
    })
    .then(() => router.push('/clientes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCliente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="usuario" placeholder="Usuario" required />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" title="No se Puede Ingresar Números"
          />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="apellidos"
            placeholder="Apellidos"
            pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" title="No se Puede Ingresar Números" required 
          />
          <label for="apellidos">Apellidos</label>
        </div>
        <div class="form-floating">
          <input type="text" 
          class="form-control" 
          v-model="email" 
          placeholder="Email" 
          required />
          <label for="email">Email</label>
        </div>
        <div class="form-floating">
          <input type="text" 
          class="form-control" 
          v-model="telefono" 
          placeholder="Telefono" 
          pattern="[0-9]+" title="No se Puede Ingresar Letras" required  />
          <label for="telefono">Teléfono</label>
        </div>
        <div class="form-floating">
          <input type="text" 
          class="form-control" 
          v-model="direccion" 
          placeholder="Direccion" 
          required />
          <label for="direccion">Dirección</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /></button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>