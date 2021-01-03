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
