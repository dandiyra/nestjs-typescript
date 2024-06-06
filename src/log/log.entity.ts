import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";


@Entity('log')
export class Log {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  headers: string;

  @Column()
  body: string;
  
  @Column()
  originalUrl: string;

}
