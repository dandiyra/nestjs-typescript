import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Leaderboard } from '../leaderboard/entities/leaderboard.entity';


@Injectable()
export class ScoreService {
  constructor(@InjectRepository(Leaderboard) private leaderboardRepository: Repository<Leaderboard>) {
  }

  async create(createScoreDto: CreateScoreDto) {
    const {score, user_id} = createScoreDto;

     // saving the score
    const newScore = this.leaderboardRepository.create({score, user_id});
    await this.leaderboardRepository.save(newScore);
  }
}
