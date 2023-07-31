import { Controller, Post, Inject, Body } from '@nestjs/common';
import { AuthUsecase } from 'src/usecase/auth.usecase';
import { SignInDto } from '../dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor( private readonly authUsecase: AuthUsecase) { }

  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authUsecase.signIn(signInDto.email,signInDto.password)
  }
}
