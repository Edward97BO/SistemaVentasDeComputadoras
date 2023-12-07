import type { Producto } from "./producto"

export interface Compra{
    id: number
    idCarrito: number
    idProducto: number
    producto: Producto
}