import { Person } from './person';

export class User extends Person {
  id: string;
  login: string;
  password: string;

  roles: string[];
}
