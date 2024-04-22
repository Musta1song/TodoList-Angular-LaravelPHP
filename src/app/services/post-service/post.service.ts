import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../../classes/todo-list';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { this.deleteReq = this.CreateNewTodo(new TodoList); }
  deleteReq: Observable<any>;

  private baseUrl = "http://127.0.0.1:8000/api/todos";

  CreateNewTodo(todos: TodoList): Observable<Object> {
    {
      return this.http.post<Object>(
        `${this.baseUrl}`, todos);
    }
  }

}