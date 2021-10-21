import { createUnionType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { DateType } from '../share';
import { Desk } from './../desks/desk.model';
@ObjectType({ implements: DateType })
export class Card implements DateType {
  @Field()
  card_id: string;
  @Field()
  card_name: string;
  @Field()
  card_data_front: string;
  @Field()
  card_data_back: string;
  @Field()
  playable_in: Date;

  @Field()
  desk: Desk;
  updated_at: Date;
  created_at: Date;
}
@ObjectType()
export class CardError {
  @Field({ nullable: true })
  path: string;
  @Field({ nullable: true })
  message: string;
}
@InputType()
export class CardInputData {
  @Field({ nullable: false })
  desk_name: string;
  @Field({ nullable: false })
  card_name: string;
  @Field({ nullable: true, defaultValue: '' })
  card_data_front: string;
  @Field({ nullable: true, defaultValue: '' })
  card_data_back: string;
}
@InputType()
export class CardEditData {
  @Field({ nullable: true })
  card_name: string;
  @Field({ nullable: true })
  card_data_front: string;
  @Field({ nullable: true })
  card_data_back: string;
  @Field({ nullable: false })
  card_id: string;
}

@ObjectType()
export class CardId {
  @Field({ nullable: true })
  card_id: string;
}
export const CardCreateResult: CardId | CardError = createUnionType({
  name: 'CardCreateResult',
  types: () => [CardId, CardError],
  resolveType(value) {
    if (value.card_id) {
      return CardId;
    }
    if (value.path || value.message) {
      return CardError;
    }
    return null;
  },
});
