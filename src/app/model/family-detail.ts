import { Parent } from './parent';
import { Child } from './child';
import { Address } from './address';

export class FamilyDetail {
    id: string;
    father: Parent;
    mother: Parent;
    children: Child[];
    address: Address;

    constructor() {
        this.father = new Parent();
        this.mother = new Parent();
        this.address = new Address();
    }
}
