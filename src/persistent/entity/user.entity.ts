import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from "class-validator"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    firstName: string;

    @Column({
        nullable: false,
        default: '',
    })
    lastName: string;

    @Column({
        unique: true,
        nullable: false,
    })
    @IsEmail()
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    phone: string;
}
