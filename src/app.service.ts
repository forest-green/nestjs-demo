/*
 * @Description: MVC中的M层  数据逻辑处理层
 * @Author: dongzhiwen
 * @since: 2021-03-19 14:21:23
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-03-19 15:04:15
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 测试数据接口';
  }

  getFindAll(): Object {
  	return {
  		name: 'jason',
  		age: 23
  	}
  }
}
