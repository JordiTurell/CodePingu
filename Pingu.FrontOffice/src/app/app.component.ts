import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pingu.FrontOffice';

  x: number = 0;
  y: number = 0;

  balls(event: any){
	this.x = event.clientX
	this.y = event.clientY

	let point = document.getElementsByClassName('pointmouse')
	let round = document.getElementsByClassName('roundmouse')


		$(point).css({
			'margin-left': (this.x +10) +'px',
			'margin-top': (this.y -10) + (window.scrollY - 5) +'px'
		});

		$(round).css({
			'margin-left': (this.x) +'px',
			'margin-top': (this.y-15) + (window.scrollY - 5) +'px'
		})
	
  }
}
