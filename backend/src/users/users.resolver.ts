import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './../auth.gurad';
import { User, UserCreateResult } from './models/user.model';
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
  getUser(@Context() context): Promise<User> {
    const user_id = context.user_id as number;
    return this.userService.getUser(user_id);
  }
  @Mutation(reutrns => UserCreateResult, { nullable: true })
  createUser(
    @Args({ name: 'username', type: () => String }) username: string,
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ): Promise<typeof UserCreateResult> {
    return this.userService.createUser(username, email, password);
  }
}
