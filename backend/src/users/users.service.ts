import { Inject, Injectable, Logger } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { GraphQlContextType } from '../share';
import { signJWT } from '../utils';
import { User } from './user.entity';
import { UserCreateResult } from './user.model';
import { loginValidationSchema, userValidationSchema } from './user.validation';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(CONTEXT) private context: GraphQlContextType,
  ) {}
  async getUsers() {
    return this.usersRepository.find({});
  }
  async getUser() {
    return this.usersRepository.findOne(
      { user_id: this.context.user_id },
      { select: ['email', 'name', 'user_id'] },
    );
  }
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<typeof UserCreateResult> {
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

      const { user_id } = await this.usersRepository.save(user);
      const jwt_token = signJWT(user_id);
      return { token: jwt_token };
    } catch (error) {
      Logger.error(error);
      return {
        path: 'Internal Error',
        message: 'Internal Server Error',
      };
    }
  }
  async loginUser(
    email: string,
    password: string,
  ): Promise<typeof UserCreateResult> {
    try {
      await loginValidationSchema.validate({ email, password });
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    const [user] = await this.usersRepository
      .createQueryBuilder()
      .select('user_id,password')
      .where('email=:mail', { mail: email })
      .andWhere('password is not null')
      .execute();
    if (!user) {
      return {
        path: 'email/password',
        message: 'Invalid Email or Password',
      };
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return {
        path: 'email/password',
        message: 'Invalid Email or Password',
      };
    }
    const jwt_token = signJWT(user.user_id);
    return { token: jwt_token };
  }
}
