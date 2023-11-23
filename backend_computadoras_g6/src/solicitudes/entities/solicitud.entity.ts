import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity('solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  codigo: string;

  @Column({ type: 'varchar', length: 60, nullable: false })
  cantidad: number;

  @Column({ name: 'DECIMAL(10,2)', nullable: false })
  precio: number;

  @OneToOne(() => Pedido, (pedido) => pedido.solicitudes)
  @JoinColumn({ name: 'id_pedido', referencedColumnName: 'id' })
  pedido: Pedido;

  @OneToMany(() => Producto, (producto) => producto.solicitudes)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;
}
