import { Guid } from "guid-typescript";

export interface IApuntesVM {
  id: Guid,
  idLenguajes: Guid,
  titulo: string,
  post: string,
  fecha: Date,
  visitas: number,
  puntuacion: number,
  avilitado: boolean  
}
