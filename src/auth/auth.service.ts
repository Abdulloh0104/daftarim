import {
  BadRequestException,
  ForbiddenException,
  //   HttpException,
  //   HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user.dto";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { User } from "../user/models/user.model";
import { UserService } from "../user/user.service";
import { Admin } from "../admin/models/admin.model";
import { AdminService } from "../admin/admin.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: "user",
      is_active: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }
  private async generateAdminToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      roles: admin.role.dataValues.value,
      is_active: admin.is_active,
    };
    // console.log("44", "admin.role", admin.role.dataValues.value);
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findByEmail(createUserDto.email);
    if (condidate) {
      //   throw new HttpException(
      //     "Bunday emaili foydalanuvchi mavjud",
      //     HttpStatus.BAD_REQUEST
      //   );
      throw new BadRequestException("Bunday emaili foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findByEmail(signInDto.email);
    if (!user) {
      const admin = await this.adminService.findByEmail(signInDto.email);
      if (admin?.password == signInDto.password) {
        return this.generateAdminToken(admin);
      }
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }
    return this.generateToken(user);
    // for (const role of user.roles) {
    //   if (role.dataValues.value == signInDto.value.toUpperCase()) {
    //     return this.generateToken(user);
    //   }
    // }
    // throw new ForbiddenException("Sizda bunday role yo'q");
  }
}
