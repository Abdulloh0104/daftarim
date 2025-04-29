import { Injectable } from "@nestjs/common";
import { CreateBlockPropertyDto } from "./dto/create-block-property.dto";
import { UpdateBlockPropertyDto } from "./dto/update-block-property.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BlockProperty } from "./models/block-property.model";
import { Types } from "../types/models/type.model";

@Injectable()
export class BlockPropertyService {
  constructor(
    @InjectModel(BlockProperty) private blockPropertyModel: typeof BlockProperty
  ) {}

  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertyModel.create(createBlockPropertyDto);
  }

  findAll() {
    return this.blockPropertyModel.findAll({include:{all:true}
      // include: {
      //   model: Types,
      //   attributes: ["name", "description"],
      //   through: { attributes: [] },
      // },

      // attributes: ["name", "description"],
    });
  }

  findOne(id: number) {
    return this.blockPropertyModel.findByPk(id);
  }

  update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return this.blockPropertyModel.update(updateBlockPropertyDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.blockPropertyModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: "Deleted" };
    }
    return "Not Found";
  }
}
