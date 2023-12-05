import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  /**
   * SequelizeModule.forFeature([User])используется для регистрации модели в модуле. Это позволяет NestJS внедрять экземпляры модели в сервисы или контроллеры, принадлежащие этому модулю.
   */
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
