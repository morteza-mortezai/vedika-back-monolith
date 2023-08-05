import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './environment.validate'
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:['./env/.db.env','./env/.app.env','./env/.jwt.env'],
      validationSchema,
      cache: true,
    })
  ],
})
export class ConfigEnvModule { }
