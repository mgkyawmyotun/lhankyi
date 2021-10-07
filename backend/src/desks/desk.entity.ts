import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'desk' })
export class DeskEntity {
  @PrimaryGeneratedColumn('uuid')
  desk_id: number;
  @Column()
  name: string;
}
