import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CardEntity } from './../cards/card.entity';
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
  @OneToMany(
    () => CardEntity,
    card => card.desk,
  )
  cards: CardEntity[];
}
