/*
 * @Description: 路由
 * @Author: dongzhiwen
 * @since: 2021-03-19 14:21:23
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-03-19 14:59:14
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * 装饰器@Get 内的参数，可以理解未请求的url
   * */ 
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findAll')
  getFindAll(): Object {
    return this.appService.getFindAll();
  }
}
