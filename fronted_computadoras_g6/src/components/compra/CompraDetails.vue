<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Carrito } from '@/models/carrito'
import type { Producto } from '@/models/producto'
import type { Compra } from '@/models/compra'

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
var compras = ref<Compra[]>([])

async function getCompra() {
  compras.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/compras/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Compra?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCompra())
  }
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
        <li class="breadcrumb-item active" aria-current="page">Carritos</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Carrito</h2>
      <div class="col-12">
        <RouterLink to="/compras/crear">
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
            <th scope="col">Código de Carrito</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compra, index) in compras.values()" :key="compra.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ compra.carrito.codigo }}</td>
            <td>{{ compra.producto.nombre }}</td>
            <td>{{ compra.carrito.cantidad }}</td>
            <td>{{ compra.carrito.precio = compra.producto.precio * compra.carrito.cantidad }}{{ ' Bs' }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(compra.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn text-danger" @click="toDelete(compra.id)">
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