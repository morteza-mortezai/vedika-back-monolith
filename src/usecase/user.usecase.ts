import { Injectable } from '@nestjs/common';
import { UserDataSource } from 'src/persistent/data-source/user.data-source';
import { CreateUserDto } from 'src/present/dto/create-user.dto';

@Injectable()
export class UserUsecase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) { }
  create(createUserDto:CreateUserDto) {
    return this.userDataSource.insert(createUserDto as any)
  }
}
