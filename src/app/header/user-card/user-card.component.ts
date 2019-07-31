import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
	isShown:boolean = false;
	@Input() user; //@Input('user') user;
	@Output() heroSelected: EventEmitter<any> = new EventEmitter(true);//@Output('heroSelected') heroSelected: EventEmitter<any> = new EventEmitter(true);

  constructor() { }

  ngOnInit() {
  }
  selectUser(){
  	this.heroSelected.emit();
  }
}
