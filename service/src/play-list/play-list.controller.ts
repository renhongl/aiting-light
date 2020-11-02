import { Controller, Get, Post } from '@nestjs/common';
import { PlayListService } from './play-list.service';

@Controller('playList')
export class PlayListController {
  constructor(private ser: PlayListService) {}

  @Get()
  getAll() {
    return this.ser.getAll();
  }
  
}
