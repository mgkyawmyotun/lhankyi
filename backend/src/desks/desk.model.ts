import { Field, InterfaceType, ObjectType } from '@nestjs/graphql';

@InterfaceType()
export class DeskInterface {
  @Field({ nullable: true })
  name: string;
}
@ObjectType({ implements: DeskInterface })
export class Desk implements DeskInterface {
  name: string;
}
