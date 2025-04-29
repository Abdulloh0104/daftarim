import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class CreatePropertyDto {
  @ApiProperty({
    example: "Subtitle",
    description: "Block property",
  })
  @IsString()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  name: string;

  @ApiProperty({
    example: "BLOCK PROPERTY",
    description: "Block property haqida",
  })
  @IsString()
  description: string;
}
