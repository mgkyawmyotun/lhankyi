import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { validateJWT } from './utils';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = context.getArgByIndex(2);
    const token = gqlContext.headers.authorization;
    if (!token) return false;
    const result = validateJWT(token) as any;
    gqlContext.user_id = result.user_id;
    return !!result;
  }
}
