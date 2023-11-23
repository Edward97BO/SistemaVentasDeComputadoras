import { Solicitud } from 'src/solicitudes/entities/solicitud.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  descripcion: string;

  @Column({ type: 'decimal', nullable: false })
  precio: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  categoria: string;

  @ManyToOne(() => Solicitud, (solicitud) => solicitud.productos)
  solicitudes: Solicitud[];
}
