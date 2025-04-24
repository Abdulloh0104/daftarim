import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Property } from './property/models/property.model';
import { BlockModule } from './block/block.module';
import { Block } from './block/models/block.model';
import { TypesModule } from './types/types.module';
import { Type } from './types/models/type.model';
import { BlockPropertyModule } from './block-property/block-property.module';
import { BlockProperty } from './block-property/models/block-property.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Property,Block,Type,BlockProperty],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    PropertyModule,
    BlockModule,
    TypesModule,
    BlockPropertyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
