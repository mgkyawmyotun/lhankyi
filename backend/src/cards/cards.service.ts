import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphQlContextType } from '../share';
import { DeskEntity } from './../desks/desk.entity';
import { CardEntity } from './card.entity';
import { CardError, CardInputData } from './card.model';
import { cardValidationSchema } from './card.validation';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRespository: Repository<CardEntity>,
    @Inject(CONTEXT) private context: GraphQlContextType,
    @InjectRepository(DeskEntity)
    private deskRespository: Repository<DeskEntity>,
  ) {}
  async getCard(card_id: string) {
    const card = await this.cardRespository.findOne({
      relations: ['desk', 'desk.user'],
      where: { card_id, desk: { user: { user_id: this.context.user_id } } },
    });
    return card;
  }
  async getAllCards() {
    const cards = await this.cardRespository.find({
      relations: ['desk', 'desk.user'],
      where: { desk: { user: { user_id: this.context.user_id } } },
    });
    return cards;
  }
  async getCardsByDesk(desk_name: string) {
    try {
    } catch (error) {}
    const cards = await this.cardRespository.find({
      relations: ['desk', 'desk.user'],
      where: {
        desk: { user: { user_id: this.context.user_id }, name: desk_name },
      },
    });
    return cards;
  }
  async createCard({
    card_name,
    card_data_back,
    card_data_front,
    desk_name,
  }: CardInputData): Promise<CardError | null> {
    try {
      await cardValidationSchema.validate({
        card_name,
        card_data_back,
        card_data_front,
        desk_name,
      });
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    try {
      const desk_exits = await this.deskRespository
        .createQueryBuilder('desk')
        .leftJoinAndSelect('desk.user', 'user')
        .where('user.user_id = :user_id', { user_id: this.context.user_id })
        .andWhere('desk.name = :desk_name', { desk_name: desk_name })
        .execute();

      if (desk_exits.length == 0) {
        throw new Error();
      }
      const card = this.cardRespository.create({
        card_name,
        card_data_back,
        card_data_front,
        desk: { name: desk_name, user: { user_id: this.context.user_id } },
      });

      await this.cardRespository.save(card);
      return null;
    } catch (error) {
      return {
        path: 'desk_name',
        message: 'Invalid Desk Name',
      };
    }
  }
}
