import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  constructor(private http: HttpClient) {}

  private url: string = "https://uinames.com/api/?amount=1&ext";

    

  public Personas(parametro) {

    // console.log('x');
    console.log(parametro);

    if(parametro=='random'){
    return this.http.get(`${this.url}`);
    }
    else {
      return this.http.get(`${this.url}&&gender=${parametro}`);
    }
    
    

  }


}
