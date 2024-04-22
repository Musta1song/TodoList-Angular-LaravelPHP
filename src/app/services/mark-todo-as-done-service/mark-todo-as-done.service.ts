import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkTodoAsDoneService {

  constructor(private http: HttpClient){}

  private baseUrl = "http://127.0.0.1:8000/api/todos";

  updateTodo(id?: any): Observable<Object> {
    return this.http.put<any>(
      `${this.baseUrl}/${id}`, id)
  }
}
