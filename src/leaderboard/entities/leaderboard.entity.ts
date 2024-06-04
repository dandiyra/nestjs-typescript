import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../auth/user.entity";


@Entity('leaderboard')
export class Leaderboard {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  user_id: number;

  @Column()
  score: number;

  @ManyToOne(type => User, user => user.leaderboard)
  @JoinColumn({name: 'user_id'})
  user!: User

}
