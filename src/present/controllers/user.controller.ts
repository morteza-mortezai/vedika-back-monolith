import { Controller, Post, UseGuards, Body ,Request} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserUsecase } from 'src/usecase/user.usecase';
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard';
import { PermissionGuard } from 'src/config/authorization/permission.guard';
import { Permission } from 'src/config/authorization/permission.decorator';
import { Action } from 'src/config/authorization/action.enum';
import { User } from 'src/persistent/entity/user.entity';

@Controller('user')
export class UserController {
  constructor( private readonly userUsecase: UserUsecase) { }
  
  @UseGuards(JwtAuthGuard,PermissionGuard)
  @Permission(Action.Create,User)
  @Post()
  create(@Body() createUserDto: CreateUserDto,@Request() req) {
    return this.userUsecase.create(createUserDto,req.user)
  }
}
