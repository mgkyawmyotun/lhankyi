import {
  createUnionType,
  Field,
  InputType,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';

@InterfaceType()
export class UserInterface {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  email: string;
}
@ObjectType({ implements: UserInterface })
export class User implements UserInterface {
  name: string;
  email: string;
}
@InputType({})
export class RegisterInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@InputType({})
export class LoginInput {
  @Field()
  email: string;
  @Field()
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
