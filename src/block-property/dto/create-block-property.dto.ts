import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @ApiProperty({
    example: "5",
    description: "block id",
  })
  @IsNumber()
  blockId: number;

  @ApiProperty({
    example: "5",
    description: "property id",
  })
  @IsNumber()
  propertyId: number;

  @ApiProperty({
    example: "Bu olam",
    description: "text info",
  })
  @IsString()
  value: string;
}
