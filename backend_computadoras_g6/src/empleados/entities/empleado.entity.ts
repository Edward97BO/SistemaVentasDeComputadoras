import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  usuario: string;

  @Column('varchar', { length: 100 })
  clave: string;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 100 })
  apellidos: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 100 })
  telefono: string;

  @Column('varchar', { length: 100 })
  direccion: string;

  @Column('varchar', { length: 100 })
  puesto: string;
}
