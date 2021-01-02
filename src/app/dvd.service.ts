import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
