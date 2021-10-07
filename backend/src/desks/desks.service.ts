import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeskEntity } from './desk.entity';
import { DeskError } from './desk.model';
import { deskValidationSchema } from './desk.validation';

@Injectable()
export class DeskService {
  constructor(
    @InjectRepository(DeskEntity)
    private deskRepository: Repository<DeskEntity>,
  ) {}
  async getDesk(user_id: number) {
    try {
      const desks = await this.deskRepository.find({ user: { user_id } });
      return desks;
    } catch (error) {
      return null;
    }
  }
  async createDesk(name: string, user_id: number): Promise<DeskError> {
    try {
      await deskValidationSchema.validate({ name });
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    try {
      const old_desk = await this.deskRepository.findOne(
        { name, user: { user_id } },
        { select: ['name'] },
      );
      if (old_desk) {
        throw new Error('desk name already exits');
      }
      const desk = this.deskRepository.create({ name, user: { user_id } });
      await this.deskRepository.save(desk);
    } catch (error) {
      return {
        path: 'desk_name',
        message: error.message,
      };
    }
    return null;
  }
}
