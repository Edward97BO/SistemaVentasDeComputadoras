import type { Producto } from "./producto";
import type { Pedido } from "./pedido";

export interface Solicitud {
    id: number;
    idPedido: Pedido;
    idProducto: Producto;
    codigo: string;
    cantidad: number;
    precio: number;
    }