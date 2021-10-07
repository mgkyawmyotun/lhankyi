import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeskEntity } from './desk.entity';

@Injectable()
export class DeskService {
  constructor(
    @InjectRepository(DeskEntity)
    private deskRepository: Repository<DeskEntity>,
  ) {}
}
