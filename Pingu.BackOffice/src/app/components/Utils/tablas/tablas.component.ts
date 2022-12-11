import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { RequestList } from '../../../Models/RequestList';
import { LoginService } from '../../../services/login.service';

const url = environment.api
declare var $: any;

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  public api! : string

  //Columnas predeterminadas
  @Input()
  public columnDefs!: ColDef[]

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  @Input()
  public rowData!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private loginservice: LoginService, private http: HttpClient) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent, api: string) {
    let data: RequestList<Object> = {
      customdata: [],
      token: (this.loginservice.token != null) ? this.loginservice.token : '',
      items: 25,
      page: 0
    };
    this.rowData = this.http.post<any>(`${url}/api/${api}`, data)
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    let id = e.data.id
    $('#delete').prop('disabled', false)
    $('#delete').data('id', id)
    $('#delete').data('obj', e.data)
    $('#edit').prop('disabled', false)
    $('#edit').data('id', id)
    $('#edit').data('obj', e.data)
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
