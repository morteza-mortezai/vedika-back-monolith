import { Controller, Post, Inject, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserUsecase } from 'src/usecase/user.usecase';

@Controller('user')
export class UserController {
  constructor( private readonly userUsecase: UserUsecase) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userUsecase.create(createUserDto)
  }
}
