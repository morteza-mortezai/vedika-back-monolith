import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import DB_CONSTANTS from 'src/config/constants/db'
@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
    constructor(
        private configService: ConfigService
    ) { }
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get(DB_CONSTANTS.POSTGRES_HOST),
            port: this.configService.get(DB_CONSTANTS.POSTGRES_PORT),
            username: this.configService.get(DB_CONSTANTS.POSTGRES_USER),
            database: this.configService.get(DB_CONSTANTS.POSTGRES_DB),
            password: this.configService.get(DB_CONSTANTS.POSTGRES_PASSWORD),
            entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            synchronize: true,
            logging: true,
            autoLoadEntities: true,
        };
    }
}

