import { PartialType } from '@nestjs/swagger';
import { CreateWorkSpaceMemberDto } from './create-work-space_member.dto';

export class UpdateWorkSpaceMemberDto extends PartialType(CreateWorkSpaceMemberDto) {}
