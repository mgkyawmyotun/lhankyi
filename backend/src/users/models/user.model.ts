import { createUnionType, Field, ObjectType } from '@nestjs/graphql';

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

@ObjectType()
export class Token {
  @Field({ nullable: true })
  token: string;
}
export const UserCreateResult: Token | UserError = createUnionType({
  name: 'UserCreateResult',
  types: () => [Token, UserError],
  resolveType(value) {
    if (value.token) {
      return Token;
    }
    if (value.path || value.message) {
      return UserError;
    }
    return null;
  },
});
