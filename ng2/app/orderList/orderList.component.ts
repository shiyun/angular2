import { Component, Output, EventEmitter } from 'angular2/core';
import {FooterDownComponent} from '../footerDown/footerDown.component'

@Component({
  selector: 'orderList',
  templateUrl: 'app/orderList/orderList.html',                                                                                                                                                                                                                                                          
  styleUrls: ['app/orderList/orderList.css'],
  directives: [FooterDownComponent]
})


export class OrderListComponent {
  @Output() updateTitle: EventEmitter<string> = new EventEmitter();

  title: string;

  constructor(){
  	this.title = '首页2';
  	setTimeout(() => this.updateTitle.emit(this.title), 100); 
  }

}