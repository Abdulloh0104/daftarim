import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { ActivateUserDto } from "./dto/activate-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: {
        all: true,
        // model: Role,
        // attributes: ["value"],
        // through: { attributes: [] },
      },
    });
    return user?.dataValues;
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    // console.log(updated);
    return updated;
  }

  async remove(id: number) {
    const deletedUser = await this.userModel.destroy({ where: { id } });
    if (deletedUser > 0) {
      return { message: "User deleted" };
    }
    return "User not found";
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (!user) {
      throw new NotFoundException("Bunday USER mavjud emas");
    }
    const updated = await this.userModel.update(
      { is_active: true },
      {
        where: { id: activateUserDto.userId },
        returning: true,
      }
    );
    return { message: "Foydalanuvchi faollashtirildi", updated };
  }
}
