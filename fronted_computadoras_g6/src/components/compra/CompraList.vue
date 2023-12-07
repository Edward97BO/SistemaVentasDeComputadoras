<script setup lang="ts">
import type { Compra } from '@/models/compra'
import type { Producto } from '@/models/producto'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

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
        <li class="breadcrumb-item active" aria-current="page">Compras</li>
      </ol>
    </nav>

    <div class="container">
    <div class="card-group">
      <div v-for="producto in productos.values()" :key="producto.id">
        <div class="row">
          <div class="col-4  m-4">
            <div class="card">
              <div class="card" style="width: 18rem">
                <img class="card-img-top" src="src\assets\images\artists\asus.jpg" alt="Imagen" />
                <div class="card-body">
                  <h5 class="card-title">{{ 'Nombre: '+producto.nombre }}</h5>
                  <p class="card-text"><strong>Descripción: </strong>{{ producto.descripcion }}</p>
                  <p class="card-text"><strong>Precio: </strong>{{ producto.precio+' Bs' }}</p>
                  <p class="card-text"><strong>Unidades Disponibles: </strong>{{ producto.stock }}</p>
                  <a href="#" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>