import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit{
	//private template: TemplateRef<any>;//можем воспользоваться TemplateRef и ViewContainerRef потому что это структурная директива и есть звездочка
	//private view: ViewContainerRef;
	@Input() appDelay: number;
  constructor(private template: TemplateRef<any>,private view: ViewContainerRef) {
   }
  ngOnInit(){
  	setTimeout(()=>{
  		this.view.createEmbeddedView(this.template);

  	},this.appDelay*1000);
  }
}
