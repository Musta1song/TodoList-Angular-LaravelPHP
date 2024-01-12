import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient){}

  private baseUrl = "http://127.0.0.1:8000/api/todos";

  deleteTodo(id?: any): Observable<Object> {
    return this.http.delete<any>(
      `${this.baseUrl}/${id}`, id)
  }

}


