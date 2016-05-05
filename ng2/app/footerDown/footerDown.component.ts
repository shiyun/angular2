import { Component } from 'angular2/core';

@Component({
  selector: 'footerDown',
  template: `
  <footer class="footer-index">
    <a href="javascript:;" (click)="appDownload()" class="downWrap"><img src="/app/index/img/down.png" width="100%" /></a>
  </footer>
  `,                                                                                                                                                                                                                                                          
  styles: [`
    .footer-index {
      position:fixed;bottom:0;right:0;left:0;
    }
    .downWrap {display:block;opacity:.8;}
  `]
})


export class FooterDownComponent {              
  appDownload(){
    var qdID = "9021",
    apiUrl = "http://api.alpha.haolawyers.cn/",
    downLoadUrl = "http://app.pocketlawyer.cn/customer_ewm/" + qdID;
    window.location.href = downLoadUrl;
  }

}