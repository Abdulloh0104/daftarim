import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Group } from "../../group/models/group.model";
import { User } from "../../user/models/user.model";

interface IGroupMemberCreationAttr {
  groupId: string;
  userId: string;
}

@Table({ tableName: "group-member" })
export class GroupMember extends Model<GroupMember, IGroupMemberCreationAttr> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: string;

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  declare groupId: string;
}
