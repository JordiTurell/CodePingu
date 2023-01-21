import { Guid } from "guid-typescript";
import { IRolesVM } from "./IRoles";

export class RolesVM implements IRolesVM {
    id!: Guid;
    name!: string;
}
