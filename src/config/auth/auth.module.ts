import { Module, Global } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UsecaseModule } from 'src/usecase/usecase.module';

@Global()
@Module({
  imports: [UsecaseModule],
  providers: [LocalStrategy],
  exports: [LocalStrategy]
})
export class AuthModule { }
