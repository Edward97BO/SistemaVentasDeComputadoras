import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  descripcion: string;

  @Column({ type: 'decimal', length: 100, nullable: false })
  precio: number;

  @Column({ type: 'int', length: 100, nullable: false })
  stock: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  categoria: string;
}
