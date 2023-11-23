<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')
const precio = ref('')
const stock = ref('')
const categoria = ref('')

const id = router.currentRoute.value.params['id']

async function editarProducto() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      descripcion: descripcion.value,
      precio: precio.value,
      stock: stock.value,
      categoria: categoria.value
    })
    .then(() => router.push('/productos'))
}

async function getProducto() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(nombre.value = response.data.nombre), (descripcion.value = response.data.descripcion), (precio.value = response.data.precio),
    (stock.value = response.data.stock),(categoria.value = response.data.categoria)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getProducto()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Producto</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarProducto">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="descripcion"
            placeholder="Descripcion"
            required
          />
          <label for="descripcion">Descripción</label>
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
        <div class="form-floating">
          <input type="number" 
          class="form-control" 
          v-model="stock" 
          placeholder="Stock" 
          required />
          <label for="stock">Stock</label>
        </div>
        <div class="form-floating">
          <select 
          type="text"
          class="form-control"
           v-model="categoria" 
           placeholder="Categoria" 
           required>
            <option value="Periferico">Periférico</option>
            <option value="Silla">Silla Gamer</option>
            <option value="Hadware">Hadware</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC de Escritorio</option>
          </select>
          <label for="categoria">Categoría</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>

