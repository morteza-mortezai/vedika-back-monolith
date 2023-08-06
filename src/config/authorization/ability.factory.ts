import { Injectable } from '@nestjs/common';
import {InferSubjects,createMongoAbility,MongoAbility,AbilityBuilder, AbilityClass,ExtractSubjectType} from '@casl/ability'
import { User } from 'src/persistent/entity/user.entity';
import { Action } from './action.enum';
type Subjects = InferSubjects<typeof Article | typeof User> | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    // const { can, cannot, build } = new AbilityBuilder< MongoAbility<[Action, Subjects]>>(Ability as AbilityClass<AppAbility>);
    const { can, cannot, build } = new AbilityBuilder< AppAbility>(createMongoAbility);

    if (user.isAdmin) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
    }

    can(Action.Update, Article, { authorId: user.id });
    cannot(Action.Delete, Article, { isPublished: true });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}