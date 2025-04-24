import { Injectable } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Property } from "./models/property.model";

@Injectable()
export class PropertyService {
  constructor(@InjectModel(Property) private propertyModel: typeof Property) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyModel.create(createPropertyDto);
  }

  findAll() {
    return this.propertyModel.findAll({
      include: { all: true },
      attributes: ["name", "description"],
    });
  }

  findOne(id: number) {
    return this.propertyModel.findByPk(id);
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const updatedProperty = await this.propertyModel.update(updatePropertyDto, {
      where: { id },
      returning: true,
    });
    return updatedProperty[1][0];
  }

  async remove(id: number) {
    const property = await this.propertyModel.destroy({ where: { id } });
    if (property > 0) {
      return { message: `${id}-builder saccessfully deleted` };
    }
    return { message: `builder was not found` };
  }
}
