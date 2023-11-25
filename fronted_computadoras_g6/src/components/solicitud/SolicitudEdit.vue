<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const codigo = ref('')
const cantidad = ref('')
const precio = ref('')


const id = router.currentRoute.value.params['id']

async function editarSolicitud() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
        codigo: codigo.value,
        cantidad: cantidad.value,
      precio: precio.value

    })
    .then(() => router.push('/solicitud'))
}

async function getSolicitud() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(codigo.value = response.data.codigo),
      (cantidad.value = response.data.cantidad),
      (precio.value = response.data.precio)

  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getSolicitud()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/solicitud">Solicitud</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Solicitud</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarSolicitud">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="codigo" placeholder="Codigo" required />
          <label for="codigo">Codigo</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="cantidad"
            placeholder="Cantidad"
            required
          />
          <label for="cantidad">Cantidad</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"
            required
          />
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