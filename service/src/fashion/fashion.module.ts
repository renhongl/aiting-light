import { Module } from '@nestjs/common';
import { FashionController } from './fashion.controller';
import { FashionService } from './fashion.service';

@Module({
  imports: [],
  controllers: [FashionController],
  providers: [FashionService],
})
export class FashionModule {}
