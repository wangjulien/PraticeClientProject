import { Address } from "./address";
import { Parent } from "./parent";
import { Child } from "./child";

export class Family {
    id: string;
    address: Address;
    father: Parent;
    mother: Parent;
    children: Child[];
}
