import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi",
  })
  @IsString()
  @IsNotEmpty({
    message: "No first_name is not allowed",
  })
  first_name: string;

  @ApiProperty({
    example: "User11",
    description: "Foydalanuvchi familiayasi",
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: "user1@amail.uz",
    description: "Foydalanuvchi emaili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "qwerty",
    description: "Foydalanuvchi paroli",
  })
  @IsStrongPassword(
    {
      minLength: 6,
      minUppercase: 0,
      minSymbols: 0,
      minNumbers: 0,
    },
    {
      message: "Password is not strong enough",
    }
  )
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "me.jpg",
    description: "Foydalanuvchi photosi",
  })
  @IsString()
  photo: string;
  refresh_token: string;
  activation_link: string;
}
