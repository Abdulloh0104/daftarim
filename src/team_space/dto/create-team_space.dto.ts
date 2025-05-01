import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateTeamSpaceDto {
  @ApiProperty({
    example: "team space name",
    description: "about name",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "team space info",
    description: "extra info",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "logo",
    description: "logo linki",
  })
  @IsString()
  icon: string;

  @ApiProperty({
    example: "2",
    description: "WorkSpace id raqami",
  })
  @IsNumber()
  workspaceId: number;

  @ApiProperty({
    example: "4",
    description: "User id raqami",
  })
  @IsNumber()
  created_by: number;

  @ApiProperty({
    example: "5",
    description: "permission id raqami",
  })
  @IsNumber()
  permissionId: number;
}
