import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './../users/user.entity';

@Entity({ name: 'desk' })
export class DeskEntity {
  @Column({ primary: true, unique: true })
  name: string;
  @ManyToOne(
    () => User,
    user => user.desks,
  )
  user: User;
}
