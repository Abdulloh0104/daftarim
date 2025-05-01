import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateWorkSpaceMemberDto {
  @ApiProperty({
    example: "false",
    description: "is user or admin",
  })
  @IsNumber()
  workspaceId: number;

  @ApiProperty({
    example: "4",
    description: "User id raqami",
  })
  @IsNumber()
  userId: number;
}
