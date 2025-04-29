import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({
    example: "user",
    description: "Ro'li",
  })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({
    example: "user",
    description: "ro'l haqida",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
