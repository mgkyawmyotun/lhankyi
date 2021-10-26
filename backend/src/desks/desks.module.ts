import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './../cards/card.entity';
import { DeskEntity } from './desk.entity';
import { DeskResolver } from './desks.resolver';
import { DeskService } from './desks.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeskEntity, CardEntity])],
  providers: [DeskService, DeskResolver],
})
export class DesksModule {}
