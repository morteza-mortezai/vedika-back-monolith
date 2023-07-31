import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsecaseModule } from 'src/usecase/usecase.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsecaseModule],
  controllers: [UserController,AuthController],
  providers: [],
})
export class ControllerModule {}
