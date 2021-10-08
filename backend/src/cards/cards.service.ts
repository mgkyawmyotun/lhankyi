import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeskEntity } from './../desks/desk.entity';
import { GraphQlContextType } from './../share.d';
import { CardEntity } from './card.entity';
import { CardError, CardInputData } from './card.model';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRespository: Repository<CardEntity>,
    @Inject(CONTEXT) private context: GraphQlContextType,
    @InjectRepository(DeskEntity)
    private deskRespository: Repository<DeskEntity>,
  ) {}
  async getAllCards() {
    const cards = await this.cardRespository.find({
      relations: ['desk', 'desk.user'],
      where: { desk: { user: { user_id: this.context.user_id } } },
    });
    console.log(cards);
    return cards;
  }
  async createCard({
    card_name,
    card_data_back,
    card_data_front,
    desk_name,
  }: CardInputData): Promise<CardError | null> {
    try {
    } catch (error) {}
    try {
      const desk_exits = await this.deskRespository.findOne(
        {
          name: desk_name,
          user: { user_id: this.context.user_id },
        },
        { relations: ['user'] },
      );
      console.log(desk_exits);

      const card = this.cardRespository.create({
        card_name,
        card_data_back,
        card_data_front,
        desk: { name: desk_name, user: { user_id: this.context.user_id } },
      });

      const card_data = await this.cardRespository.save(card);
      return null;
    } catch (error) {
      console.log(error);
      return {
        path: 'desk_name',
        message: 'Invalid Desk Name',
      };
    }
  }
}
