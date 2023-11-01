import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50, nullable: false })
  idPedido: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  estado: string;
  @CreateDateColumn({ name: 'fecha_pedido' })
  fechaPedido: Date;
}
