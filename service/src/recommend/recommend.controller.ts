import { Controller, Get, Post } from '@nestjs/common';
import { RecommendService } from './recommend.service';

@Controller('recommend')
export class RecommendController {
  constructor(private ser: RecommendService) {}

  @Get()
  getAll() {
    return this.ser.getAll();
  }
  
}
