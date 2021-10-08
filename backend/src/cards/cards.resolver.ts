import { Resolver } from '@nestjs/graphql';
import { Card } from './card.model';
import { CardsService } from './cards.service';
@Resolver(of => Card)
export class CardsResolver {
  constructor(private cardsService: CardsService) {}
}
