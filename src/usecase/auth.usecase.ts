import { Injectable } from '@nestjs/common';
import { UserUsecase } from './user.usecase';
import { User } from 'src/persistent/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUsecase {
  constructor(
    private readonly userUsecase: UserUsecase,
    private readonly jwtService: JwtService
  ) { }
  async validateUser(email: string, password: string) {
    const user = await this.userUsecase.findOne(email)
    if (user && user.password == password) {
      const { password, ...result } = user
      return result
    }
    return null
  }
  async login(user: User) {
    const payload = { email: user.email, userId: user.id }
    return { access_token: this.jwtService.sign(payload) }
  }
}
