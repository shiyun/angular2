import {Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Injectable()

export class OrderListService{  
  constructor(public _http: Http){}
  
  getOrderListParentId(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const _url = '/api/getParentId';
    let getPid = new Promise((resolve, reject)=>{
      this._http.post(_url, {}, {headers: headers})
                .subscribe(
                  data=>resolve(data.json()),
                  err=>reject(err),
                  ()=>console.log('get pid complete')
                );
    });
    return getPid;
  }
    
  getQuan(cb){
    let headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    const _url = '/api/product';
    
    function* getPidFun(){
      yield this.getOrderListParentId().then(res=>res);
    };
    
    
    
    let obj = getPidFun().next();
    
    let pro = new Promise((resolve, reject)=>{
      this._http.post(_url, obj, {headers: headers})                       
              .subscribe(
                data =>resolve(data.json()),
                err => reject(err),
                ()=>console.log('get complete')
              );
    });        
    
    return pro;        
  }     
  
}
