import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly configService:ConfigService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 's54df5sd4f5ds4fds5f',
            // secretOrKey: configService.get('JWT_SECRET'),
        })
    }
    async validate(payload:any){
        // we could look for revoked tokens here and so on
        return  { userId: payload.sub, email: payload.email };
    }
}