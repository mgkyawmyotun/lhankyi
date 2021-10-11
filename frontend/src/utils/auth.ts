export function isTokenExits() {
  return localStorage.getItem('token') ? true : false;
}
export function setToken(token: string) {
  localStorage.setItem('token', token);
}
