import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  idSolicitud: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  idProducto: string;

  @Column({ type: 'varchar', length: 60, nullable: false })
  cantidad: number;

  @Column({ name: 'DECIMAL(10,2)', nullable: false })
  precio: number;
}
