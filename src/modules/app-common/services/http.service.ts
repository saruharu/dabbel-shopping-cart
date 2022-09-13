import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get(url:string,options?:any){
    return this.httpClient.get(url,options).pipe(catchError(err=>{return err;}))
  }

  public post(url:string,body:any,options?:any){
    return this.httpClient.post(url,body,options).pipe(catchError(err=>{return err;}))
  }

  public put(url:string,body:any,options?:any){
    this.httpClient.put(url,body,options).pipe(catchError(err=>{return err;}))
  }

  public delete(url:string,options?:any){
    this.httpClient.delete(url,options).pipe(catchError(err=>{return err;}))
  }

}
