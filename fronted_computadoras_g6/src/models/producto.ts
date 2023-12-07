import type { Categoria } from "./categoria";

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  url: string;
  categoria: Categoria;
  }