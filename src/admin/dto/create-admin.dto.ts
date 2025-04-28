import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdminDto {
  @IsString()
  full_name: string;

  @IsEmail()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  password: string;

  @IsNumber()
  roleId: number;
}
