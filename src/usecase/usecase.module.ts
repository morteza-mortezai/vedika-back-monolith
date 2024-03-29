import { Module } from '@nestjs/common';
import { DataSourceModule } from 'src/persistent/data-source/data-source.module';
import { UserUsecase } from './user.usecase';
import { AuthUsecase } from './auth.usecase';
import { JwtModule } from '@nestjs/jwt';
import { CaslModule } from 'src/config/authorization/casl.module';

@Module({
  imports: [
    DataSourceModule, JwtModule.register({
      secret: 's54df5sd4f5ds4fds5f',
      signOptions: { expiresIn: '60000s' }
    }), CaslModule
  ],
  controllers: [],
  providers: [UserUsecase, AuthUsecase],
  exports: [UserUsecase, AuthUsecase],
})
export class UsecaseModule { }
