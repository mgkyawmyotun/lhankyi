import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeskEntity } from './../desks/desk.entity';
import { CardEntity } from './card.entity';
import { CardsResolver } from './cards.resolver';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, DeskEntity])],
  providers: [CardsService, CardsResolver],
})
export class CardsModule {}
