import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RecommendModule } from './recommend/recommend.module';
import { FashionModule } from './fashion/fashion.module';
import { PlayListModule } from './play-list/play-list.module'

@Module({
  imports: [
    TagModule,
    RecommendModule,
    FashionModule,
    PlayListModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
