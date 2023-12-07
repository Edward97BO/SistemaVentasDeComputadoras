<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Pedido } from '@/models/pedido'
import type { Producto } from '@/models/producto'

var pedidos = ref<Pedido[]>([])
async function getPedidos() {
  pedidos.value = await http.get('pedidos').then((response) => response.data)
}

onMounted(() => {
  getPedidos()
})

var productos = ref<Producto[]>([])
async function getProductos() {
  productos.value = await http.get('productos').then((response) => response.data)
}

onMounted(() => {
  getProductos()
})

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const codigo = ref('')
const cantidad = ref('')
const precio = ref('')
const idPedido = ref('')
const idProducto = ref('')

const id = router.currentRoute.value.params['id']

async function editarSolicitud() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      codigo: codigo.value,
      cantidad: cantidad.value,
      precio: precio.value,
      idPedido: idPedido.value,
      idProducto: idProducto.value
    })
    .then(() => router.push('/solicitudes'))
}

async function getSolicitud() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(codigo.value = response.data.codigo),
      (cantidad.value = response.data.cantidad),
      (precio.value = response.data.precio),
      (idPedido.value = response.data.idPedido),
      (idProducto.value = response.data.idProducto)
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
          <RouterLink to="/solicitudes">Pedidos en Línea</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Pedido</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarSolicitud">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="codigo" placeholder="Codigo" required />
          <label for="codigo">Código</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" v-model="cantidad" placeholder="Cantidad" />

          <label for="cantidad">Cantidad</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" v-model="precio" placeholder="Precio" />
          <label for="precio">Precio</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="idPedido" class="form-select">
            <option v-for="pedido in pedidos" :value="pedido.id" :key="pedido.id">
              {{ pedido.codigo }}
            </option>
          </select>
          <label for="pedido">Código de Pedido</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="idProducto" class="form-select">
            <option v-for="producto in productos" :value="producto.id" :key="producto.id">
              {{ producto.nombre }}
            </option>
          </select>
          <label for="producto">Nombre de Producto</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" />
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
