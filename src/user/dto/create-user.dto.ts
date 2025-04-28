import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: "No first_name is not allowed",
  })
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

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

  @IsString()
  photo: string;
  refresh_token: string;
  activation_link: string;
}
