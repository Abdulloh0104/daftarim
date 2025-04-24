import { Module } from '@nestjs/common';
import { BlockPropertyService } from './block-property.service';
import { BlockPropertyController } from './block-property.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlockProperty } from './models/block-property.model';

@Module({
  imports:[SequelizeModule.forFeature([BlockProperty])],
  controllers: [BlockPropertyController],
  providers: [BlockPropertyService],
})
export class BlockPropertyModule {}
