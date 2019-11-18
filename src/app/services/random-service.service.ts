import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomServiceService {

  constructor(private http: HttpClient) {}

  
  
  
  public Personas(parametro, pais) {
    
    let url: string = "https://uinames.com/api/?amount=1&ext";
    
    

    if(parametro == 'random' && pais == null){

      url=url;
    }
    else if(parametro == 'random' && pais != null){

      url=url+`&region=${pais}`
    }
   
    else if(parametro != 'random' && pais == null){
      url = url+`&gender=${parametro}`
    }

    else if(parametro != 'random' && pais != null){
      url = url+`&gender=${parametro}&region=${pais}`
    }

    
    
    url=encodeURI(url);
    console.log(url);
    
    
    return this.http.get(url);
    
    

  }


}
