import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeskEntity } from './desk.entity';
import { DeskResolver } from './desks.resolver';
import { DeskService } from './desks.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeskEntity])],
  providers: [DeskService, DeskResolver],
})
export class DesksModule {}
