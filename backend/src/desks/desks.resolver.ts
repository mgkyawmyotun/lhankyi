import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './../auth.gurad';
import { Desk, DeskError } from './desk.model';
import { DeskService } from './desks.service';

@Resolver(of => Desk)
@UseGuards(AuthGuard)
export class DeskResolver {
  constructor(private deskService: DeskService) {}
  @Query(returns => [Desk], { nullable: true })
  getDesks(@Context() context) {
    return this.deskService.getDesks(context.user_id);
  }
  @Mutation(returns => DeskError, { nullable: true })
  createDesk(@Args('desk_name') desk_name: string, @Context() context) {
    return this.deskService.createDesk(desk_name, context.user_id);
  }
  @Mutation(returns => DeskError, { nullable: true })
  removeDesk(@Args('desk_name') desk_name: string, @Context() context) {
    return this.deskService.removeDesk(desk_name, context.user_id);
  }
  @Mutation(returns => DeskError, { nullable: true })
  editDesk(
    @Args('new_desk_name') new_desk_name: string,
    @Args('old_desk_name') old_desk_name: string,
    @Context() context,
  ) {
    return this.deskService.editDesk(
      new_desk_name,
      old_desk_name,
      context.user_id,
    );
  }
}
