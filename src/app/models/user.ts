import { Role } from '../data/role';
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}