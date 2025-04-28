import { IsNumber, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @IsNumber()
  blockId: number;

  @IsNumber()
  propertyId: number;

  @IsString()
  value: string;
}
