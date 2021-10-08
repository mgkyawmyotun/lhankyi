import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardEntity } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRespository: Repository<CardEntity>,
  ) {}
}
