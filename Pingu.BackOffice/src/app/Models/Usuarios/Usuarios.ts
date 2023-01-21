import { Guid } from "guid-typescript";
import { IUsuarios } from "./IUsuarios";

export class Usuarios implements IUsuarios {
    id!: Guid;
    nombre!: string;
    rol!: string;
    idRol!: Guid;
}
