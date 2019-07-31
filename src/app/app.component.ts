import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  
  changeColor(hello){
  	console.log('%c----','background:lime',hello);
  	console.log('%c----','background:lime',hello.value);
  	hello.style.background = hello.value;
  }
}
