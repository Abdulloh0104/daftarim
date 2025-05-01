import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePermissionDto {
  @ApiProperty({
    example: "Permission name",
    description: "Fully allowed",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "information",
    description: "extra info",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "third",
    description: "level info",
  })
  @IsString()
  label: string;
}
