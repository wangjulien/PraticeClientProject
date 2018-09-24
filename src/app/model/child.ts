import { Person } from './person';
import { Activity } from './activity';

export class Child extends Person {
  id: string;
  section: string;
  activities: Activity[];
}
