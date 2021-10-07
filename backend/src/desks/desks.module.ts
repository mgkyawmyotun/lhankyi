import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './../auth.gurad';
import { DeskEntity } from './desk.entity';
import { DeskResolver } from './desks.resolver';
import { DeskService } from './desks.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeskEntity])],
  providers: [
    DeskService,
    DeskResolver,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class DesksModule {}
