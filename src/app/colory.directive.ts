import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {
	@HostBinding('style.color') myColor: string;

	@HostListener('click',['$events'])changeColor(event){
		this.myColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	}
	
  constructor() { 
  	this.myColor = 'red';
  	setTimeout(_=>{
  		this.myColor = 'green';
  	},2000);
  }

}
