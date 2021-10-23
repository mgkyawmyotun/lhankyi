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
  getCardsByDesk(@Args('desk_name') desk_name: string) {
    return this.cardsService.getCardsByDesk(desk_name);
  }

  @Query(returns => [Card], { nullable: false })
  getAllCards() {
    return this.cardsService.getAllCards();
  }

  @Query(returns => [Card], { nullable: false })
  getPlayAbleCards() {
    return this.cardsService.getPlayAbleCards();
  }

  @Query(returns => [Card], { nullable: false })
  getPlayAbleCardsByDesk(@Args('desk_name') desk_name: string) {
    return this.cardsService.getPlayAbleCardsByDesk(desk_name);
  }

  @Query(returns => Number, { nullable: false })
  getPlayAbleCardsCount() {
    return this.cardsService.getPlayAbleCardsCount();
  }

  @Query(returns => Number, { nullable: false })
  getPlayAbleCardsByDeskCount(@Args('desk_name') desk_name: string) {
    return this.cardsService.getPlayAbleCardsByDeskCount(desk_name);
  }

  @Mutation(returns => CardCreateResult, { nullable: true })
  createCard(@Args('cardInputData') cardInputData: CardInputData) {
    return this.cardsService.createCard(cardInputData);
  }

  @Mutation(returns => CardError, { nullable: true })
  editCard(@Args('cardInputData') cardInputData: CardEditData) {
    return this.cardsService.editCard(cardInputData);
  }

  @Mutation(returns => CardError, { nullable: true })
  setPlayableTime(@Args('card_id') card_id: string, @Args('date') date: Date) {
    return this.cardsService.setPlayableDate(card_id, date);
  }
}
