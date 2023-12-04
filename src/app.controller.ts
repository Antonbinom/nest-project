import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  // Что бы использовать сервис внутри контроллера,необходимо сделать dependency injection,
  //передаем в конструктор сервис
  // таким образом нет нужды создавать объект из этого класса, мы им просто пользуемся
  // за создание отвечает Nest
  constructor(private appService: AppService) {}
  @Get('/users')
  getUsers() {
    return [{ id: 1, text: 'Test text' }];
  }
}
