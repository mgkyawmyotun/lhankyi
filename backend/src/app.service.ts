import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'So It IS Failed ? Lets Try another ';
  }
}
