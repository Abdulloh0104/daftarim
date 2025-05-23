import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    // console.log(req);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan",
      });
    }
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (bearer != "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Beare token aniqlanmadi",
      });
    }
    // //logika
    let user: any;
    try {
      user = this.jwtService.verify(token);
    } catch (error) {
      console.log("Error");

      throw new UnauthorizedException({
        message: "Invalid signature Token noto'g'ri",
        error: error,
      });
    }
    req.user = user;
    return true;
  }
}
