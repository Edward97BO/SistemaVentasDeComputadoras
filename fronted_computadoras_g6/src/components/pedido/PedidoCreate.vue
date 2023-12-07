<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Cliente } from '@/models/cliente'

var clientes = ref<Cliente[]>([])
async function getClientes() {
  clientes.value = await http.get('clientes').then((response) => response.data)
}

onMounted(() => {
  getClientes()
})

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const codigo = ref('')
const estado = ref('')
const fechaPedido = ref('')
const idCliente = ref('')

async function crearPedido() {
  await http
    .post(ENDPOINT, {
      codigo: codigo.value,
      estado: estado.value,
      fechaPedido: fechaPedido.value,
      idCliente: idCliente.value
    })
    .then(() => router.push('/pedidos'))
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
          <RouterLink to="/pedidos">Pedidos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Pedido</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearPedido">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="codigo" placeholder="Codigo" required />
          <label for="codigo">Código</label>
        </div>
        <div class="form-floating">
          <select v-model="estado" class="form-control" placeholder="Estado" required>
            <option>Enviado</option>
            <option>Entregado</option>
            <option>Cancelado</option>
            <option>Rechazado</option>
          </select>
          <label for="estado">Estado</label>
        </div>
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            v-model="fechaPedido"
            placeholder="FechaPedido"
            required
          />
          <label for="fechaPedido">Fecha de Pedido</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="idCliente" class="form-select">
            <option v-for="cliente in clientes" :value="cliente.id" :key="cliente.id"> {{ cliente.nombre+' '+cliente.apellidos }} </option>
          </select>
          <label for="cliente">Cliente</label>
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
