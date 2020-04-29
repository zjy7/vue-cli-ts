// types.ts
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface DynStore {
  value:string |null;
  id:number;
}

export interface Kp2State {
  user?: User;
  error: boolean;
  menus: object[];
  currentDynId: number;
  nextDynId: number;
  dynStore: DynStore[];
}
