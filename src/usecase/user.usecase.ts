import { Injectable } from '@nestjs/common';
import { UserDataSource } from 'src/persistent/data-source/user.data-source';
import { User } from 'src/persistent/entity/user.entity';
import { CreateUserDto } from 'src/present/dto/create-user.dto';

@Injectable()
export class UserUsecase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) { }
  create(createUserDto:CreateUserDto) {
    return this.userDataSource.insert(createUserDto as any)
  }
  findOne(email:string):Promise<User|null> {
    return this.userDataSource.findByOption({email})
  }
}
