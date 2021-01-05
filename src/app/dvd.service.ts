import { Dvd } from './dvd';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private dvdUrl = 'http://localhost:8080/api';  // URL to web api



  constructor(private http: HttpClient) {}

  getDvds(): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.dvdUrl + '/dvds');

  }



  public findDvdbycategory(category, value){
    let url = 'http://localhost:8080/api/dvds/' + category + '/' + value;

    return this.http.get(url, {
      params: {
      }
    })

  }

  public updateDvd(dvd){
    const body = JSON.stringify(dvd);
    return this.http.put('http://localhost:8080/api/dvd' + dvd.id, body, 
    {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    );
  }

  public addDvd(dvd){

    // const header = new Headers(
    //   {
    //       'Content-Type': 'application/json'
    //   });
      const body = JSON.stringify(dvd);

    console.log(body);
    return this.http.post('http://localhost:8080/api/dvd', body, 
    {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    );
  }





//   this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
//     this.postId = data.id;
// })

}
