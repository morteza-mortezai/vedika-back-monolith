import { Module } from '@nestjs/common';
import { ConfigEnvModule } from './configEnv/environment.module';

@Module({
  imports: [],
  controllers: [],
  providers: [ConfigEnvModule],
})
export class AppModule {}
