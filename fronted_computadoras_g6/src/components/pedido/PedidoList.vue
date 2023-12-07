<script setup lang="ts">
import type { Pedido } from '@/models/pedido'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import dayjs from 'dayjs'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var pedidos = ref<Pedido[]>([])

async function getPedido() {
  pedidos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/pedidos/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Pedido?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getPedido())
  }
}

onMounted(() => {
  getPedido()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Pedidos</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Pedidos</h2>
      <div class="col-12">
        <RouterLink to="/pedidos/crear">
          <font-awesome-icon icon="fa-solid fa-plus" />
          Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Código</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha de Pedido</th>
            <th scope="col">Cliente</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pedido, index) in pedidos.values()" :key="pedido.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ pedido.codigo }}</td>
            <td>{{ pedido.estado }}</td>
            <td>{{ dayjs(pedido.fechaPedido).format('DD/MM/YYYY') }}</td>
            <td>{{ pedido.cliente.nombre + ' ' + pedido.cliente.apellidos }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(pedido.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn text-danger" @click="toDelete(pedido.id)">
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
