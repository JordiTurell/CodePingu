import { Component } from '@angular/core';
import {Tabs} from 'src/app/Models/Tabs';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent {
	
	public tabsname: Tabs[] = [
			{ name : 'Extreme-it', title: 'Extreme-it', description : ['Creación de aplicaciones web en Net Core.', 'Construcción de bases de datos.', 'Todas las aplicaciones realizadas a medida para el cliente.'] },
			{ name : 'Autonomo', title: 'Autonomo', description : ['Creación de App\'s en Android.', 'Creación de aplicaciones web en Net Core, PHP, Ruby on Rails.'] },
			{ name : 'Flutter', title: 'Flutter (Terrassa)', description : ['Creación de aplicaciones web a medida.', 'Creación de portales en Wordpress con plugins a medida.'] },
			{ name: 'Olr', title : 'Olr (Barcelona)', description : ['Creación de aplicaciones web con Net Framework.', 'Creación de bases de datos.', 'Aplicaciones nativas en Android.'] },
		];

	constructor(){
	}

}
