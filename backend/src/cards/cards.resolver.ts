import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './../auth.gurad';
import {
  Card,
  CardCreateResult,
  CardEditData,
  CardError,
  CardInputData,
} from './card.model';
import { CardsService } from './cards.service';
@Resolver(of => Card)
@UseGuards(AuthGuard)
export class CardsResolver {
  constructor(private cardsService: CardsService) {}

  @Query(returns => Card, { nullable: false })
  getCard(@Args('card_id') card_id: string) {
    return this.cardsService.getCard(card_id);
  }
  @Query(returns => [Card], { nullable: false })
  getCardsByDesk(@Args('desk_name') deck_name: string) {
    return this.cardsService.getCardsByDesk(deck_name);
  }
  @Query(returns => [Card], { nullable: false })
  getAllCards() {
    return this.cardsService.getAllCards();
  }
  @Mutation(returns => CardCreateResult, { nullable: true })
  createCard(@Args('cardInputData') cardInputData: CardInputData) {
    return this.cardsService.createCard(cardInputData);
  }
  @Mutation(returns => CardError, { nullable: true })
  editCard(@Args('cardInputData') cardInputData: CardEditData) {
    return this.cardsService.editCard(cardInputData);
  }
}
