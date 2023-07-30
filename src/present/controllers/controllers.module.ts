import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsecaseModule } from 'src/usecase/usecase.module';

@Module({
  imports: [UsecaseModule],
  controllers: [UserController],
  providers: [],
})
export class ControllerModule {}
