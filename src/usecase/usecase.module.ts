import { Module } from '@nestjs/common';
import { DataSourceModule } from 'src/persistent/data-source/data-source.module';
import { UserUsecase } from './user.usecase';

@Module({
  imports: [DataSourceModule],
  controllers: [],
  providers: [UserUsecase],
  exports: [UserUsecase],
})
export class UsecaseModule {}
