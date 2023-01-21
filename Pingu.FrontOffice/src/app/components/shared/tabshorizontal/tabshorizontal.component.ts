import { Component, Input, AfterViewInit } from '@angular/core';
import {Tabs} from 'src/app/Models/Tabs';

@Component({
  selector: 'app-tabshorizontal',
  templateUrl: './tabshorizontal.component.html',
  styleUrls: ['./tabshorizontal.component.scss']
})
export class TabshorizontalComponent implements AfterViewInit{

	@Input()
	public TabsName!: Tabs[]

	constructor(){

	}

	ngAfterViewInit(): void {
		let element  = document.getElementById('BtnTab'+this.TabsName[0].name) as HTMLElement
		element.click()
	}

	openTab(event: Event, currenTab: string) {
		let a, tabcontent, tablinks;
		
		tabcontent = document.querySelectorAll<HTMLElement>('.tabcontent')
		for(a = 0; a < tabcontent.length; a++){
			tabcontent[a].style.display = 'none'
		}

		tablinks = document.querySelectorAll<HTMLElement>('.tablinks')
		for(a = 0; a < tablinks.length; a++){
			tablinks[a].className = tablinks[a].className.replace('active', '')
		}

		//let id = (event.currentTarget as HTMLElement).id
		
		let tab = document.getElementById(currenTab) as HTMLElement
		if(tab != null){
			tab.style.display = 'block'			
		}
		(event.currentTarget as HTMLElement).className += 'active'
		//event.currentTarget?.className += 'active'
		
	}
}
