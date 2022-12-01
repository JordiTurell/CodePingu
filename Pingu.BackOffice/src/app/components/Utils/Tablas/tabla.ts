import { ResponseList } from "../../../Models/ResponseList";

declare var $: any;

export class CustomTablas<T>{
  data: ResponseList<T> | undefined;

  constructor(data: ResponseList<T>) {
    this.data = data
  }

  onInit() {
    if (this.data != undefined) {
      if (this.data.status) {
        console.log(this.data)
      }
    } else {
      alert('Error create table.')
    }
  }
}
