import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Leaderboard } from '../leaderboard/entities/leaderboard.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([Leaderboard]),
  ],
  controllers: [ScoreController],
  providers: [ScoreService]
})
export class ScoreModule {}
