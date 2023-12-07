<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Cliente } from '@/models/cliente';
import type { Carrito } from '@/models/carrito';
import type { Producto } from '@/models/producto';

var productos = ref<Producto[]>([])
async function getProductos() {
    productos.value = await http.get('productos').then((response) => response.data)
}
var carritos = ref<Carrito[]>([])
async function getCarritos() {
    carritos.value = await http.get('carritos').then((response) => response.data)
}
onMounted(() => {
  getCarritos()
})

onMounted(() => {
  getProductos()
})
const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const idCarrito= ref('')
const idProducto= ref('')

const id = router.currentRoute.value.params['id']

async function editarCompra() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
        idProducto: idProducto.value,
        idCarrito: idCarrito.value,
    })
    .then(() => router.push('/compras'))
}

async function getCompra() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
      (idProducto.value = response.data.idProducto),
      (idCarrito.value = response.data.idCarrito)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCompra()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/pedidos">Compras</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Compra</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarCompra">
        <div class="form-floating mb-3">
          <select v-model="idProducto" class="form-select">
            <option v-for="producto in productos" :value="producto.id" :key="producto.id"> {{ producto.nombre+' '+producto}} </option>
          </select>
          <label for="producto">Producto</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="idCarrito" class="form-select">
            <option v-for="carrito in carritos" :value="carrito.id" :key="carrito.id"> {{ carrito.codigo}} </option>
          </select>
          <label for="carrito">Código de Carrito</label>
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