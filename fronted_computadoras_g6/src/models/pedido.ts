import type { Cliente } from "./cliente";

export interface Empleado {
    id: number;
    codigo: string;
    estado: string;
    fechaPedido: Date;
    idCliente: Cliente;
    }