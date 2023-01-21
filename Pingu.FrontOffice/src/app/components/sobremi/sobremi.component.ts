import { Component } from '@angular/core';
import {Tabs} from 'src/app/Models/Tabs';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent {
	
	public tabsname: Tabs[] = [
			{ name : 'Olr', description : 'Olr caca' },
			{ name : 'Flutter', description : 'Flutter bueno' },
			{ name : 'Autonomo', description : 'Autonomo :D' },
			{ name : 'Extreme-it', description : 'Exit :D pero es empresa i hi han follons' },
		];

	constructor(){
	}

}
