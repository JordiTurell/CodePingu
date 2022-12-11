import { ILenguajesVM } from "./ILenguajesVM";
import { Guid } from "guid-typescript";

export class LenguajesVM implements ILenguajesVM {
  id!: Guid;
  nombre: string = '';
}
