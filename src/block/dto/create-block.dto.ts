import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @IsNumber()
  typeId: number;

  @IsNumber()
  created_by: number;

  @IsNumber()
  parentId: number;

  @IsNumber()
  order_index: number;
}
