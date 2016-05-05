import {Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

@Injectable()

export class LoginService{  
  constructor(public _http: Http){}
    
  getVeriCode(obj){
      let headers = new Headers();
      //headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Content-Type', 'application/json');
      const _url = '/api/getVeriCode';
      let loginPro = new Promise((resolve, reject)=>{
        this._http.post(_url, obj, {headers: headers})                       
                .subscribe(
                  data =>resolve(data.json()),
                  err => reject(err),
                  ()=>console.log('get complete')
                );
      });
      
      return loginPro;     
    
  }
  
  login(data){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    const _url = '/api/apiLogin';
    let loginFun = new Promise((resolve, reject)=>{
      this._http.post(_url, data, {headers: headers})
                .subscribe(
                  data=>resolve(data.json()),
                  err=>reject(err),
                  ()=>console.log('login complete')
                )
    });
    
    return loginFun;
  }
  
}