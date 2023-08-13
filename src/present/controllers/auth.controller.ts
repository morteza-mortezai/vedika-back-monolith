import { Controller, Post,Get, UseGuards, Body ,Request} from '@nestjs/common';
import { AuthUsecase } from 'src/usecase/auth.usecase';
import { SignInDto } from '../dto/sign-in.dto';
import { LocalAuthGuard } from 'src/config/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor( private readonly authUsecase: AuthUsecase) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@Body() signInDto: SignInDto,@Request()req) {
    // return req.user
    console.log('req.user',req.user)
    return this.authUsecase.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request()req) {
    console.log('req.user',req.user)
    return req.user
  }
}
