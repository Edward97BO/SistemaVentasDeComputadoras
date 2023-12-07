import type { Cliente } from "./cliente";

export interface Pedido {
    id: number;
    codigo: string;
    estado: string;
    fechaPedido: Date;
    idCliente: Cliente;
    cliente: Cliente;
    }