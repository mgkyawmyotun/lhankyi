import { Query, Resolver } from '@nestjs/graphql';
import { User } from './../users/user.model';
import { Desk } from './desk.model';
import { DeskService } from './desks.service';

@Resolver(of => Desk)
export class DeskResolver {
  constructor(private deskService: DeskService) {}
  @Query(returns => [User], { nullable: true })
  getDesks() {
    //     return this.deskService.();
  }
}
