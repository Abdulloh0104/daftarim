import { IsNotEmpty, IsString } from "class-validator"

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty({
    message: "No name is not allowed",
  })
  name: string;
  @IsString()
  description: string;
}
