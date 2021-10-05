import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  email?: string;
}
