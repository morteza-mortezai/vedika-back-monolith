import { Module, Global } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UsecaseModule } from 'src/usecase/usecase.module';
import { JwtStrategy } from './jwt.strategy';

@Global()
@Module({
  imports: [UsecaseModule],
  providers: [LocalStrategy, JwtStrategy],
  exports: [LocalStrategy]
})
export class AuthModule { }
