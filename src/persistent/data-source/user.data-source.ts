import { Injectable, Inject } from '@nestjs/common';
import { GenericRepository } from '../generic-repository/generic.repository';
// import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserDataSource {

    constructor(
        @Inject('userRepository') private readonly userRepository: GenericRepository<User>
    ) { }

    insert(user:User): Promise<User> {
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
        // return null as any
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email })
        return null as any
    }

}
