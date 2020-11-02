import { Controller, Get, Post } from '@nestjs/common';
import { FashionService } from './fashion.service';

@Controller('fashion')
export class FashionController {
  constructor(private ser: FashionService) {}

  @Get()
  getAll() {
    return this.ser.getAll();
  }
  
}
