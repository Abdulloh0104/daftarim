import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { JwtAuthGuard } from "../common/guard/jwt-auth.guard";
import { JwtSelfGuard } from "../common/guard/jwt-self.guard";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./models/user.model";
import { Roles } from "../common/decorator/roles-auth.decorator";
import { RolesGuard } from "../common/guard/roles.guard";


  @Controller("user")
  export class UserController {
    constructor(private readonly userService: UserService) {}

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "Foydalanuvchi qo'shish Controller" })
    @ApiResponse({
      status: 201,
      description: "Create user",
      type: User,
    })
    @Post()
    async create(
      @Body() createUserDto: CreateUserDto
    ) {
      const user = await this.userService.findByEmail(createUserDto.email);
      if (user) {
        return this.userService.create(createUserDto);
      }
      return { message: `Bunday foydalanuvchi mavjud` };
    }

    // @ApiBearerAuth()
    @ApiOperation({ summary: "Barcha foydalanuvchilarni ma'lumotlarini olish" })
    @ApiResponse({
      status: 200,
      description: "List of users",
      type: [User],
    })
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
      return this.userService.findAll();
    }

    // @ApiBearerAuth()
    @ApiOperation({ summary: "Bitta foydalanuvchi ma'lumotlarini olish" })
    @ApiResponse({
      status: 200,
      description: "Get one user",
      type: User,
    })
    // @UseGuards(JwtSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string) {
      return this.userService.findOne(+id);
    }

    @ApiOperation({
      summary: "Bitta foydalanuvchi ma'lumotlarini olish email orqali olish",
    })
    @ApiResponse({
      status: 200,
      description: "Get one user",
      type: User,
    })
    @Post(":email")
    findByEmail(@Param("email") email: string) {
      return this.userService.findByEmail(email);
    }

    @ApiBearerAuth()
    @ApiOperation({
      summary: "Bitta foydalanuvchi ma'lumotlarini o'zgartirish",
    })
    @ApiResponse({
      status: 200,
      description: "Change one user info",
      type: User,
    })
    // @UseGuards(JwtSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update(+id, updateUserDto);
    }

    @ApiBearerAuth()
    @ApiOperation({ summary: "Bitta foydalanuvchi ma'lumotlarini o'chirish" })
    @ApiResponse({
      status: 200,
      description: "Delete one user",
    })
    // @UseGuards(JwtSelfGuard)
    // @UseGuards(JwtAuthGuard)
    @Delete(":id")
    remove(@Param("id") id: string) {
      return this.userService.remove(+id);
    }

    @ApiOperation({ summary: "Bitta foydalanuvchini faollashtirish" })
    @ApiResponse({
      status: 200,
      description: "user activation",
      type: User,
    })
    @HttpCode(HttpStatus.OK)
    @Post("activate-user")
    async activateUser(@Body() activateUserDto: ActivateUserDto) {
      return this.userService.activateUser(activateUserDto);
    }
  }
