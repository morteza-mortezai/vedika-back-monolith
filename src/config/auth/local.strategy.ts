import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthUsecase } from "src/usecase/auth.usecase";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authUsecase: AuthUsecase) {
        super({ usernameField: 'email' })
    }
    async validate(email: string, password: string) {
        const user = await this.authUsecase.validateUser(email, password)
        if (!user) throw new UnauthorizedException()
        return user
    }
}