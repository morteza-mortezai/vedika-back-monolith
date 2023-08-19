import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from "class-validator"

export enum MediaType {
    TELEGRAM = "telegram",
    INSTAGRAM = "instagram",
    BALE = "bale",
    EITAA="eitaa",
    RUBIKA="rubika",
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    title: string;

    @Column({
        nullable: false,
    })
    desc: string;

    @Column({
        nullable: true,
    })
    avatar: string;

    @Column({})
    phone: string;

    @Column({
        unique: false,
        nullable: false,
    })
    addr: string;

    @Column({
        nullable: false,
    })
    follower: number;

    @Column({
        unique: true,
        nullable: false,
    })
    owner: string;

    @Column({
        nullable: false,
    })
    price: string;

    @Column({
        nullable: true,
    })
    priceDetail: string

    @Column({
        nullable: false,
        default: false,
    })
    isVip: boolean;

    @Column({})
    locations: Array<number>;

    @Column({})
    categories: Array<number>;

    @Column({
        type: "enum",
        enum: MediaType,
    })
    mediaType: MediaType;
}
