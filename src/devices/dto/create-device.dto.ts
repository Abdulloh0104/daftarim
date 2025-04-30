import { ApiProperty } from "@nestjs/swagger";

export class CreateDeviceDto {
  @ApiProperty({
    example: "Laptop",
    description: "NoteBook",
  })
  name: string;

  @ApiProperty({
    example: "2025-04-30",
    description: "Oxirgi ishlatilingan sanasi",
  })
  last_active: Date;

  @ApiProperty({
    example: "Qurilma manzili",
    description: "Oxirgi ishlatilingan joyi",
  })
  location: string;

  @ApiProperty({
    example: "User info",
    description: "User info",
  })
  information: string;

  @ApiProperty({
    example: "4",
    description: "User id raqami",
  })
  userId: number;
}
