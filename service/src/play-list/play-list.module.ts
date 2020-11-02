import { Module } from '@nestjs/common';
import { PlayListController } from './play-list.controller';
import { PlayListService } from './play-list.service';

@Module({
  imports: [],
  controllers: [PlayListController],
  providers: [PlayListService],
})
export class PlayListModule {}
