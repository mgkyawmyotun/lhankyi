import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphQlContextType } from '../share';
import { DeskEntity } from './desk.entity';
import { DeskError } from './desk.model';
import { deskValidationSchema } from './desk.validation';

@Injectable()
export class DeskService {
  constructor(
    @InjectRepository(DeskEntity)
    private deskRepository: Repository<DeskEntity>,
    @Inject(CONTEXT) private context: GraphQlContextType,
  ) {}
  async getDesks() {
    try {
      const desks = await this.deskRepository.find({
        user: { user_id: this.context.user_id },
      });
      return desks;
    } catch (error) {
      return null;
    }
  }
  async createDesk(name: string): Promise<DeskError> {
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
        { name, user: { user_id: this.context.user_id } },
        { select: ['name'] },
      );
      if (old_desk) {
        throw new Error('desk name already exits');
      }
      const desk = this.deskRepository.create({
        name,
        user: { user_id: this.context.user_id },
      });
      await this.deskRepository.save(desk);
    } catch (error) {
      return {
        path: 'desk_name',
        message: error.message,
      };
    }
    return null;
  }
  async removeDesk(name: string): Promise<DeskError> {
    try {
      await this.deskRepository.delete({
        name: name,
        user: { user_id: this.context.user_id },
      });
      return null;
    } catch (error) {
      return {
        path: 'Internal Error',
        message: 'Internal Error Please Contact Admin',
      };
    }
  }
  async editDesk(
    new_desk_name: string,
    old_desk_name: string,
  ): Promise<DeskError> {
    try {
      await deskValidationSchema.validate({ name: new_desk_name });
    } catch (error) {
      return {
        path: 'new_desk_name',
        message: error.message,
      };
    }
    try {
      await this.deskRepository.update(
        { name: old_desk_name, user: { user_id: this.context.user_id } },
        { name: new_desk_name },
      );
      return null;
    } catch (error) {
      return {
        path: 'new_desk_name',
        message: 'desk_name already exits',
      };
    }
  }
}
