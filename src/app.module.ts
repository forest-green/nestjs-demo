/*
 * @Description: 有点类似于 Vue中的app.vue的作用，提供一个主入口文件
 * @Author: dongzhiwen
 * @since: 2021-03-19 14:21:23
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-03-19 14:59:14
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
