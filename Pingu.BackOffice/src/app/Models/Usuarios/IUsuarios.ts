import { Guid } from "guid-typescript";

export interface IUsuarios {
  id: Guid,
  nombre: string,
  rol: string,
  idRol: Guid
}
