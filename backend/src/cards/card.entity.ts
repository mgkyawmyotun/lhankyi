import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DeskEntity } from './../desks/desk.entity';

@Entity({ name: 'card' })
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  card_id: string;
  @Column({ type: 'varchar', length: 20 })
  card_name: string;
  @Column({ type: 'text' })
  card_data_front: string;
  @Column({ type: 'text' })
  card_data_back: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @ManyToOne(
    () => DeskEntity,
    desk => desk.cards,
  )
  desk: DeskEntity;
}
