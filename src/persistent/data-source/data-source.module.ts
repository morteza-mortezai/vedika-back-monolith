import { Module } from '@nestjs/common';
import { UserDataSource } from './user.data-source';
import { User } from '../entity/user.entity';

import { Repository, EntityManager } from 'typeorm'
import { GenericRepository } from '../generic-repository/generic.repository';
import { OrmModule } from '../orm/orm.module';


@Module({
    imports: [
        OrmModule,
        // TypeOrmModule.forFeature([User])
    ],
    controllers: [],
    providers: [UserDataSource,
        {
            provide: 'userRepository',
            useFactory: (manager: EntityManager) => (new GenericRepository(new Repository(User, manager))),
            inject: [EntityManager]
        },
    ],
    exports: [UserDataSource]
})
export class DataSourceModule { }
