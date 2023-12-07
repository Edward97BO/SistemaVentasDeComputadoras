<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const clave = ref('')
const nombre = ref('')
const apellidos = ref('')
const email = ref('')
const telefono = ref('')
const direccion = ref('')
const puesto = ref('')


const id = router.currentRoute.value.params['id']

async function editarEmpleado() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      usuario: usuario.value,
      clave: clave.value,
      nombre: nombre.value,
      apellidos: apellidos.value,
      email: email.value,
      telefono: telefono.value,
      direccion: direccion.value,
      puesto: puesto.value
    })
    .then(() => router.push('/empleados'))
}

async function getCliente() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(usuario.value = response.data.usuario),
      (clave.value = response.data.clave),
      (nombre.value = response.data.nombre),
      (apellidos.value = response.data.apellidos),
      (email.value = response.data.email),
      (telefono.value = response.data.telefono),
      (direccion.value = response.data.direccion),
      (puesto.value = response.data.puesto)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCliente()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/empleados">Empleados</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Empleado</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarEmpleado">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="usuario" placeholder="Usuario" required />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="clave"
            placeholder="Clave"
            required
          />
          <label for="clave">Clave</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
            required
          />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="apellidos"
            placeholder="Apellidos"
            required
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
          required />
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
        <div class="form-floating">
          <select v-model="puesto" class="form-control" placeholder="Puesto" required>
            <option>Administrador</option>
            <option>Ventas</option>
            <option>Marketing</option>
          </select>
          <label for="puesto">Puesto</label>
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