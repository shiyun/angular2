import { Component, Output, EventEmitter } from 'angular2/core';
import {FooterDownComponent} from '../footerDown/footerDown.component'

@Component({
  selector: 'indexPage',
  templateUrl: 'app/index/index.html',                                                                                                                                                                                                                                                          
  styleUrls: ['app/index/index.css'],
  directives: [FooterDownComponent]
})


export class IndexComponent {
  @Output() updateTitle: EventEmitter<string> = new EventEmitter();

  title: string;

  constructor(){
  	this.title = '首页2';
  	setTimeout(() => this.updateTitle.emit(this.title), 100); 
  }

}