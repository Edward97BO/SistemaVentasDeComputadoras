import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carritos')
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_producto' })
  idProducto: number;

  @Column({ length: 10 })
  codigo: string;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'decimal', nullable: false })
  precio: number;

  @OneToMany(() => Producto, (producto) => producto.carritos)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;
}
