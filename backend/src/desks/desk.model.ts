import { Field, InputType, InterfaceType, ObjectType } from '@nestjs/graphql';

@InterfaceType()
export class DeskInterface {
  @Field({ nullable: true })
  name: string;
}
@ObjectType({ implements: DeskInterface })
export class Desk implements DeskInterface {
  name: string;
}
@InputType()
export class DeskInput {
  @Field()
  name: string;
}

@ObjectType()
export class DeskError {
  @Field({ nullable: true })
  path: string;
  @Field({ nullable: true })
  message: string;
}
