import { Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RouteInfo } from '@nestjs/common/interfaces';
import { request } from 'http';
import { Log } from 'src/log/log.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    // constructor(@InjectRepository(Log) private LogRepository: Repository<Log>) {
    // }

  use(req: Request, res: Response, next: NextFunction) {
    // Gets the request log
    console.log(`req:`, {
      headers: req.headers,
      body: req.body,
      originalUrl: req.originalUrl,
    });

    // const headers = req.headers;
    const body = req.body;
    const originalUrl = req.originalUrl;

    // // saving the log
    // const newLog = this.LogRepository.create({body, originalUrl});
    // this.LogRepository.save(newLog);
    // Ends middleware function execution, hence allowing to move on 
    if (next) {
      next();
    }
  }
}