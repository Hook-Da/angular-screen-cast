import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
/*
*  У директивы есть свойство exportAs с помощью которого мы можем указать
*  с каким именем мы хотим экспортировать наш класс
*/
export class ColoryDirective {
	@HostBinding('style.color') myColor: string;

	@HostListener('click',['$events'])changeColor(event){
		this.setRandomColor();
	}
	
  setRandomColor(){
     this.myColor = '#'+Math.floor(Math.random()*16777215).toString(16); 
  }

  constructor() { 
  	this.myColor = 'red';
  	setTimeout(_=>{
  		this.myColor = 'green';
  	},2000);
  }

}
