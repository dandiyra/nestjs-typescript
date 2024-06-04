import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Leaderboard } from "../leaderboard/entities/leaderboard.entity";


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({unique: true})
  email: string;

  @Column()
  username: string;
  
  @Column()
  password: string;

  @OneToMany(type => Leaderboard, leaderboard => leaderboard.user)
  leaderboard!: Leaderboard[];
}
