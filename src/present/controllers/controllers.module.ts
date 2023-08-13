import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsecaseModule } from 'src/usecase/usecase.module';
import { AuthController } from './auth.controller';
import { CaslModule } from 'src/config/authorization/casl.module';

@Module({
  imports: [UsecaseModule,CaslModule],
  controllers: [UserController,AuthController],
  providers: [],
})
export class ControllerModule {}
