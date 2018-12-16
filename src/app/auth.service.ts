import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient, HttpParams }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerurl="http://localhost:8081/register";
  private _loginurl="http://localhost:8081/login"; 
  private _gethotels="http://localhost:8081/gethotels";
  private _getcount="http://localhost:8081/getcount";
  private _getsearch="http://localhost:8081/getsearch";
 
  constructor(private _http:HttpClient) { }
  registeruser(user:any)
  {
    return this._http.post<any>(this._registerurl,user);
  }
  loginuser(user)
  {
    return this._http.post<any>(this._loginurl,user)
  }
  //THIS IS ACTUALLY GET HOTELS 
   getRestaurants()
   {
     return this._http.get<any>(this._gethotels)
   }
   getsearch(resname:string)
   {
    var params=new HttpParams();
    params=params.append("resname",resname);
    console.log("params is "+params);
     return this._http.get<any>(this._getsearch,{params:params});
   }
   getRestaurantsCount()
   {
     return this._http.get<any>(this._getcount);
   }
}
