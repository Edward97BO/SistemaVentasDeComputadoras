<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Producto } from '@/models/producto';
import type { Carrito } from '@/models/carrito';

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
const idProducto = ref('')
const idCarrito = ref('')


async function crearCompra() {
  await http
    .post(ENDPOINT, {
        idCarrito: idCarrito.value,
        idProducto: idProducto.value,
    })
    .then(() => router.push('/compras'))
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
          <RouterLink to="/compras">Compras</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Compra</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCompra">
        <div class="form-floating mb-3">
          <select v-model="idProducto" class="form-select">
            <option v-for="producto in productos" :value="producto.id" :key="producto.id"> {{ producto.nombre}} </option>
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