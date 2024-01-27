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

  private baseUrl = "http://localhost:8080/api/newTodo";

  CreateNewTodo(todos: TodoList): Observable<Object> {
    {
      return this.http.post<Object>(
        `${this.baseUrl}`, todos);
    }
  }

}