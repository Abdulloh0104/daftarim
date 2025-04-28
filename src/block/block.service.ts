import { Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Block } from "./models/block.model";
// import { Type } from "class-transformer";

@Injectable()
export class BlockService {
  constructor(@InjectModel(Block) private blockModel: typeof Block) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.findAll({include:{all:true}
      // include: {
      //   // model: Type,
      //   attributes: ["name", "description"],
      //   through: { attributes: [] },
      // },
    });
  }

  findOne(id: number) {
    return this.blockModel.findByPk(id);
  }

  async update(id: number, updateBlockDto: UpdateBlockDto) {
    const updated = await this.blockModel.update(updateBlockDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  async remove(id: number) {
    const deletedBlock = await this.blockModel.destroy({ where: { id } });
    if (deletedBlock > 0) {
      return { message: "Block o'chirildi" };
    }
    return "Bunday Block mavjud emas";
  }
}
