import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { CaslAbilityFactory } from './ability.factory';
import { Action } from './action.enum';
import { User } from 'src/persistent/entity/user.entity';
import { AnyAbility } from '@casl/ability';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // return validateRequest(request);
    const permission:any = this.reflector.get<Action>('permission', context.getHandler());
    const {subject,action} = permission

    const request = context.switchToHttp().getRequest();
    const user = request.user

    return this.matchPermission(user, action, subject)
  }
  matchPermission(user: User, action: Action, subject: string) {
    const ability = this.caslAbilityFactory.createForUser(user);
    console.log('user2',action,subject)
    console.log('can',ability.can(action, subject))
    if (ability.can(action, subject)) {
      return true
    }
    return false
  }
}
