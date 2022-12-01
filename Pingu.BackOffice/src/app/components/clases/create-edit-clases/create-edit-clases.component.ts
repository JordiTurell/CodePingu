import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-create-edit-clases',
  templateUrl: './create-edit-clases.component.html',
  styleUrls: ['./create-edit-clases.component.scss']
})
export class CreateEditClasesComponent {
  constructor(public loginservice: LoginService) {

  }

  async ngOnInit() {
    await this.loginservice.validatetoken()
  }

  Submit(f: NgForm) {

  }
}
