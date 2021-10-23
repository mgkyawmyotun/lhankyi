import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { DeskEntity } from './../desks/desk.entity';
import { CardEntity } from './card.entity';
import { CardsResolver } from './cards.resolver';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, DeskEntity, User])],
  providers: [CardsService, CardsResolver],
})
export class CardsModule {}
