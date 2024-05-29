import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn({
    name: 'id_producto',
    primaryKeyConstraintName: 'productos_pk',
  })
  id_producto: number;

  @Column({
    name: 'nombre_producto',
    type: 'varchar',
    length: 255,
  })
  nombre_producto: string;

  @Column({
    name: 'precio_producto',
    type: 'int',
  })
  precio_producto: number;
}
