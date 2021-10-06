import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  password: string;
}

@ObjectType()
export class UserError {
  @Field({ nullable: true })
  path: string;
  @Field({ nullable: true })
  message: string;
}
