<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const codigo = ref('')
const cantidad = ref('')
const precio = ref('')


async function crearSolicitud() {
  await http
    .post(ENDPOINT, {
      codigo: codigo.value,
      cantidad: cantidad.value,
      precio: precio.value

    })
    .then(() => router.push('/solicitud'))
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
          <RouterLink to="/solicitud">solicitud</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva solicitud</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearSolicitud">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="codigo" placeholder="Codigo" required />
          <label for="codigo">Codigo</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="cantidad"
            placeholder="Cantidad"/>

          <label for="cantidad">Cantidad</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"/>
          <label for="precio">Precio</label>
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