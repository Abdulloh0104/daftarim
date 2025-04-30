import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
  @ApiProperty({
    example: "Hi",
    description: "Contentmatni",
  })
  @IsString()
  content: string;

  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi unical id raqami",
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: "4",
    description: "Block id raqami",
  })
  @IsNumber()
  blockId: number;
}
