import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @ApiProperty({
    example: "3",
    description: "type number",
  })
  @IsNumber()
  typeId: number;

  @ApiProperty({
    example: "5",
    description: "user id",
  })
  @IsNumber()
  created_by: number;

  @ApiProperty({
    example: "2",
    description: "block id",
  })
  @IsNumber()
  parentId: number;

  @ApiProperty({
    example: "7",
    description: "order number in a row",
  })
  @IsNumber()
  order_index: number;
}
