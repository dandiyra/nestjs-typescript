import { Injectable } from '@nestjs/common';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { Leaderboard } from './entities/leaderboard.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LeaderboardService {
  constructor(@InjectRepository(Leaderboard) private leaderboardRepository: Repository<Leaderboard>) {
  }
  
  async generateLeaderboard() {
    const leaderboard = await this.leaderboardRepository
    .createQueryBuilder("leaderboard")
    .leftJoinAndSelect("leaderboard.user", "user")
    .select([
      "user.id",
      "user.username",
      "leaderboard.score",
    ])
    .orderBy("leaderboard.score", "DESC")
    .limit(10)
    .getRawMany()
    
    return leaderboard;
  }

}
