import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./models/comment.model";

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  findAll() {
    return this.commentModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.commentModel.findByPk(id);
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const updated = await this.commentModel.update(updateCommentDto, {
      where: { id },
      returning: true,
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.commentModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: "Comment deleted" };
    }
    return "Comment not found";
  }
}
