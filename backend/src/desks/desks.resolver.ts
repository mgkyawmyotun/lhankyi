import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Desk, DeskError } from './desk.model';
import { DeskService } from './desks.service';

@Resolver(of => Desk)
export class DeskResolver {
  constructor(private deskService: DeskService) {}
  @Query(returns => [Desk], { nullable: true })
  getDesks(@Context() context) {
    return this.deskService.getDesk(context.user_id);
  }
  @Mutation(returns => DeskError, { nullable: true })
  createDesk(@Args('desk_name') desk_name: string, @Context() context) {
    return this.deskService.createDesk(desk_name, context.user_id);
  }
}
