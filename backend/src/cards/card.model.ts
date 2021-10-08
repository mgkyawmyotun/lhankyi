import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Desk } from './../desks/desk.model';
@ObjectType()
export class Card {
  @Field()
  card_id: number;
  @Field()
  card_name: string;
  @Field()
  card_data_front: string;
  @Field()
  card_data_back: string;
  @Field()
  desk: Desk;
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
