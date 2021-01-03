import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(private http: HttpClient) {}

  public getAllDvds(){
    return this.http.get('http://localhost:8080/api/dvds', {
      params: {
      }
    });
  }

  public getDvdByTitle(title: string){
    return this.http.get('http://localhost:8080/api/', {
      params: {
        title: title
      }
    });
  }

  public addDvd(dvd){

    const header = new Headers(
      {
          'Content-Type': 'application/json'
      });
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
