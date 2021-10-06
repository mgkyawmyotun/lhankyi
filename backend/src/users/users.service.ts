import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserError } from './models/user.model';
import { User } from './user.entity';
import { userValidationSchema } from './user.validation';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getUsers() {
    return this.usersRepository.find({});
  }
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<UserError> {
    try {
      await userValidationSchema.validate({
        name,
        email,
        password,
      });
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    const user = await this.usersRepository.findOne(
      { email },
      { select: ['user_id'] },
    );
    if (user) {
      return { path: 'email', message: 'user already exits' };
    }
    try {
      const user = this.usersRepository.create({ name, email, password });
      await this.usersRepository.save(user);
    } catch (error) {
      return {
        path: 'Internal Error',
        message: 'Internal Server Error',
      };
    }
  }
}
