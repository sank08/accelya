import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  invokeHttp(value): Observable<HttpResponse<Object>> {
    let headers = new HttpHeaders({});
    let serviceURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+value;    
      return this.httpClient.get(serviceURL, {
        headers: headers,
        observe: 'response'
      });
    }

    getSearch(value){
      return this.invokeHttp(value);
    }
  
}
