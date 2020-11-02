import { Controller, Get, Post } from '@nestjs/common';

@Controller('tag')
export class TagController {
  constructor() {}

  @Get()
  findAll(): string {
    return 'All tags';
  }
  
}
