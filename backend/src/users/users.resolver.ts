import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './../auth.gurad';
import {
  LoginInput,
  RegisterInput,
  User,
  UserCreateResult,
} from './user.model';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}
  @Query(returns => [User], { nullable: true })
  getUsers() {
    return this.userService.getUsers();
  }
  @Query(returns => User)
  @UseGuards(AuthGuard)
  getUser(): Promise<User> {
    return this.userService.getUser();
  }
  @Mutation(reutrns => UserCreateResult, { nullable: true })
  createUser(
    @Args('registerData') { name, email, password }: RegisterInput,
  ): Promise<typeof UserCreateResult> {
    return this.userService.createUser(name, email, password);
  }
  @Mutation(returns => UserCreateResult)
  loginUser(@Args('loginData') { email, password }: LoginInput) {
    return this.userService.loginUser(email, password);
  }
}
