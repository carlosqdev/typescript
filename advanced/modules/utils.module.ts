export const PI = 3.14;

export interface User {
  name: string;
  pass: string;
}

export const generateId = () => {
  return Math.floor(Math.random() * 100)
}