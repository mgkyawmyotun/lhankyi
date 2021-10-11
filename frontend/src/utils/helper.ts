export function getURI() {
  return process.env.NODE_ENV === 'production'
    ? 'https://lhankyi.herokuapp.com/graphql'
    : 'http://localhost:3000/graphql';
}
