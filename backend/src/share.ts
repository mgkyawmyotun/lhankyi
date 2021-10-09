import { Field, InterfaceType } from '@nestjs/graphql';

export type GraphQlContextType = {
  user_id: string;
};

@InterfaceType()
export class DateType {
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
}
