import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { LocalGuard } from "../auth/guard/local.guard";
import { JwtGuard } from "../auth/guard/jwt.guard";

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  leaderboard() {
    return this.leaderboardService.generateLeaderboard();
  }

K
}
