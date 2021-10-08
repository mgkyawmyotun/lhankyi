import { sign, verify } from 'jsonwebtoken';
export function isProduction() {
  return process.env.NODE_ENV == 'production';
}

export function signJWT(user_id: string) {
  return sign({ user_id }, process.env.JWT_SECRECT, { expiresIn: '30d' });
}
export function validateJWT(token: string) {
  try {
    const token_data = verify(token, process.env.JWT_SECRECT);
    return token_data;
  } catch (error) {
    return false;
  }
}
