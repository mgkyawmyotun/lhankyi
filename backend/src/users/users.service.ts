import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async addUser(name: string, email: string) {
    const user = this.usersRepository.create({ name, email });
    await this.usersRepository.save(user);
    return 'User Created Sucessfully';
  }
  getUsers() {
    return this.usersRepository.find();
  }
}
