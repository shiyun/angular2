import { Component, Output, EventEmitter } from 'angular2/core';
import {FooterDownComponent} from '../footerDown/footerDown.component'
import {OrderListService} from './orderList.service'

@Component({
  selector: 'orderList',
  templateUrl: 'app/orderList/orderList.html',                                                                                                                                                                                                                                                          
  styleUrls: ['app/orderList/orderList.css'],
  directives: [FooterDownComponent],
  providers: [OrderListService]
})


export class OrderListComponent {
  constructor(
    private _orderService: OrderListService
  ){}

  function* quips(name) {
    yield "hello " + name + "!";
    yield "i hope you are enjoying the blog posts";
    if (name.toLowerCase().startsWith("x")) {
      yield "hey, it's cool how your name starts with an X, " + name;
    }
    yield "see you later!";
  }

  var meow_iter = quips("Xingu");
}