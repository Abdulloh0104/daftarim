import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {
  @ApiProperty({
    example: "N18",
    description: "H. M. team",
  })
  name: string;

  @ApiProperty({
    example: "Apple logo",
    description: "Team logo",
  })
  icon: string;

  @ApiProperty({
    example: "O'qing bolalar",
    description: "extra info",
  })
  description: string;

  @ApiProperty({
    example: "4",
    description: "Block id raqami",
  })
  created_by: number;
}
