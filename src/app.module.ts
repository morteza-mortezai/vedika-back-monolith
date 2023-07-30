import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './config/env/environment.module';
import { ControllerModule } from './present/controllers/controllers.module';

@Module({
  imports: [ControllerModule,ConfigEnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
