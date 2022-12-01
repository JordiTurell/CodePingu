export interface RequestList<T> {
  customdata: Array<T>,
  token: string,
  page : number,
  items : number
}
