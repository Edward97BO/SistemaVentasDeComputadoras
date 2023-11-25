<script setup lang="ts">
import type { Solicitud } from '@/models/solicitud'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var solicitudes = ref<Solicitud[]>([])

async function getSolicitud() {
  solicitudes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/solicitudes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la solicitud?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getSolicitud())
  }
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
        <li class="breadcrumb-item active" aria-current="page">Solicitudes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Solicitudes</h2>
      <div class="col-12">
        <RouterLink to="/solicitudes/crear">
          <font-awesome-icon icon="fa-solid fa-plus" />
          Crear Nuevo</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Código</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(solicitud, index) in solicitudes.values()" :key="solicitud.id">
            <th scope="row">{{ index + 1 }}</th>

            <td>{{ solicitud.codigo }}</td>
            <td>{{ solicitud.cantidad }}</td>
            <td>{{ solicitud.precio }}</td>
            
            <td>
              <button class="btn text-success" @click="toEdit(solicitud.id)">
                <font-awesome-icon icon="fa-solid fa-edit" /> 
              </button>
              <button class="btn text-danger" @click="toDelete(solicitud.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>