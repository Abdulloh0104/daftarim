import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { JwtAuthGuard } from "../common/guard/jwt-auth.guard";
import { JwtSelfGuard } from "../common/guard/jwt-self.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) {
      return this.userService.create(createUserDto);
    }
    return {message:`Bunday foydalanuvchi mavjud`}
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Post(":email")
  findByEmail(@Param("email") email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }

  @Post("activate-user")
  async activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.userService.activateUser(activateUserDto);
  }
}
