import { Injectable } from '@nestjs/common';
import { UserDataSource } from 'src/persistent/data-source/user.data-source';

@Injectable()
export class AuthUsecase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) { }
  signIn(email:string,password:string) {
   return this.userDataSource.findByOption({email})
  }
}
