import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './orm.config';
import { User } from '../entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [TypeOrmConfig],
})
export class OrmModule {}
