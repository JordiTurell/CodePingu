import { IApuntesVM } from "./IApuntesVM";
import { Guid } from "guid-typescript";

export class ApuntesVM implements IApuntesVM {
    id!: Guid;
    idLenguajes!: Guid;
    titulo!: string;
    post!: string;
    fecha!: Date;
    visitas!: number;
    puntuacion!: number;
    avilitado!: boolean;
}
