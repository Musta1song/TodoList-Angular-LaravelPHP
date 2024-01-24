import { Injectable } from '@angular/core';
import { TodoList } from '../../classes/todo-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetTodoListService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://127.0.0.1:8000/api/todos";

  GetTodoList(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.baseUrl}`);
    
  }
}
