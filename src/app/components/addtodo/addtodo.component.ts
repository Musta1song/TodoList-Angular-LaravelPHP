import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostService } from '../../services/post-service/post.service';
import { TodoList } from '../../classes/todo-list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [MatInputModule, MatIconModule, MatFormFieldModule, FormsModule, MatButtonModule, CommonModule, RouterOutlet],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.scss'
})
export class AddtodoComponent {
  todos: TodoList = new TodoList();

  constructor(private postService: PostService) { }


  CreateNewTodo() {
    if (this.todos.time == null) {
      if (this.todos.todo != null) {
        alert("Geben Sie eine Uhrzeit ein!");
        return
      }
      alert("Geben Sie eine Aufgabe und eine Uhrzeit ein!");
      return
    }
    if (this.todos.todo == null) {
      alert("Geben Sie eine Aufgabe ein!");
      return
    }
    this.todos.isDone = false
    this.postService.CreateNewTodo(this.todos).subscribe();
    alert("Todo wurde erstellt!")

  }
}
