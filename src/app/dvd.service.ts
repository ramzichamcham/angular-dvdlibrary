import { Dvd } from './dvd';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdUrl = 'http://localhost:8080/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getDvds(): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.dvdUrl + '/dvds');

  }

  addDvd(dvd: Dvd): Observable<Dvd>{
    return this.http.post<Dvd>(this.dvdUrl + '/dvd', dvd, this.httpOptions);
  }

  public getByCategory(category, value){
    return this.http.get<Dvd[]>(this.dvdUrl + '/dvds/'+ category + '/' + value);
  }

  public getDvd(id: number): Observable<Dvd> {
    return this.http.get<Dvd>(this.dvdUrl + '/dvd/' + id);
  }

  public updateDvd(dvd: Dvd): Observable<any>{
    return this.http.put(this.dvdUrl + '/dvd/' + dvd.id , dvd, this.httpOptions);
  }

  public deleteById(id: number){
    return this.http.delete(this.dvdUrl +'/dvd/' + id);
  }

  // public addDvd(dvd){

  //   // const header = new Headers(
  //   //   {
  //   //       'Content-Type': 'application/json'
  //   //   });
  //     const body = JSON.stringify(dvd);

  //   console.log(body);
  //   return this.http.post('http://localhost:8080/api/dvd', body, 
  //   {headers: new HttpHeaders({'Content-Type': 'application/json'})}
  //   );

//   this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
//     this.postId = data.id;
// })


}





