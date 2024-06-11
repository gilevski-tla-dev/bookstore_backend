import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  title: string;

  @Column('varchar')
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
