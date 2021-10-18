import { Field, InputType, ObjectType } from '@nestjs/graphql';
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
