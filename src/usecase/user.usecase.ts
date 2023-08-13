import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CaslAbilityFactory } from 'src/config/authorization/ability.factory';
import { UserDataSource } from 'src/persistent/data-source/user.data-source';
import { User } from 'src/persistent/entity/user.entity';
import { CreateUserDto } from 'src/present/dto/create-user.dto';
import { Action } from 'src/config/authorization/action.enum';
interface IUser{
  id:number,
  email:string
}
@Injectable()
export class UserUsecase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly caslAbilityFactory: CaslAbilityFactory,

  ) { }
  create(createUserDto: CreateUserDto,user:IUser) {
    const ability = this.caslAbilityFactory.createForUser(user as User);
    // if (ability.can(Action.Create, User)) {
      return this.userDataSource.insert(createUserDto as any)
    // }
    // throw new UnauthorizedException()
  }
  findOne(email: string): Promise<User | null> {
    return this.userDataSource.findByOption({ email })
  }
}
