import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';
import { CardsResolver } from './cards.resolver';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardsService, CardsResolver],
})
export class CardsModule {}
