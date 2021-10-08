import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DeskEntity } from './../desks/desk.entity';

@Entity({ name: 'card' })
export class CardEntity {
  @PrimaryGeneratedColumn()
  card_id: number;
  @ManyToOne(
    () => DeskEntity,
    desk => desk.cards,
  )
  desk: DeskEntity;
}
