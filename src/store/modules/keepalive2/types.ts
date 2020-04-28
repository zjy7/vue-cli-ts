// types.ts
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface Kp2State {
  user?: User;
  error: boolean;
  menus: object[];
}