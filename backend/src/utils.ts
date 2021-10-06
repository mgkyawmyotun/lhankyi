import { sign } from 'jsonwebtoken';
export function isProduction() {
  return process.env.NODE_ENV == 'production';
}

export function signJWT(user_id: number) {
  return sign({ user_id }, process.env.JWT_SECRECT, { expiresIn: '30d' });
}
