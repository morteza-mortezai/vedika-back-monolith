import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './config/env/environment.module';
import { ControllerModule } from './present/controllers/controllers.module';
import { AuthModule } from './config/auth/auth.module';

@Module({
  imports: [ControllerModule,ConfigEnvModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
