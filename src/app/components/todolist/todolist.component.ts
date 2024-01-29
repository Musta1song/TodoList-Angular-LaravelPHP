import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule, } from '@angular/material/button'
import { DeleteService } from '../../services/delete-service/delete.service';
import { TodoList } from '../../classes/todo-list';
import { OnInit } from '@angular/core';
import { GetTodoListService } from '../../services/get-service/get-todo-list.service';
import { FormsModule } from '@angular/forms';
import { MarkTodoAsDoneService } from '../../services/mark-todo-as-done-service/mark-todo-as-done.service';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  DragDropModule
} from '@angular/cdk/drag-drop';
import { TodoListPage2 } from '../../classes/todo-list-page2';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag,CommonModule, RouterOutlet, MatCardModule, FormsModule, MatButtonModule, MatIconModule,DragDropModule],

  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent implements OnInit{

title = 'AtodoNew';
done!: TodoListPage2[];
todo!: TodoListPage2[];

constructor(
  public deleteService: DeleteService,
  public getTodoListService: GetTodoListService,
  public isDoneService: MarkTodoAsDoneService) { }
todolist!: TodoList[]
todos: TodoList = new TodoList()
id!: number



drop(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
      
    );
    document.getElementById("matbt")!.style.visibility = "visible"

  }
}
deleteTodo(ID:any){
  this.deleteService.deleteTodo(ID).subscribe();
      window.location.reload()
}

markTodoAsDone() {
  for (let i of this.done) {
    if (i.isDone != true)
      this.isDoneService.updateTodo(i.id).subscribe();
  }
      window.location.reload()
  

}
ngOnInit(): void {
  this.getTodoListService.GetTodoList().subscribe((data: TodoList[]) => {
    this.todolist = data;
    this.sort(this.todolist)
    this.sortByIsDone(this.todolist)
    console.log(this.todo)
  });
}

sort(arr: any[]) {
  let timeArr: any[] = this.getTimeArr(arr);
  let size = arr.length;
  let minIndex;
  for (let i = 0; i < size - 1; i++) {
    minIndex = i;
    for (let j = i; j < size; j++) {
      if (timeArr[minIndex] > timeArr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = timeArr[i];
      timeArr[i] = timeArr[minIndex];
      timeArr[minIndex] = temp;
      let temp2 = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp2
    }
  }
  return arr;
}
getTimeArr(arr: any[]) {
  let timeArr: any = [
  ]
  for (let i of arr) {
    timeArr.push(i.time)
  }
  return timeArr
}

sortByIsDone(arr: any[]) {
  let done: any = []
  let todo: any = []

  for (let i of arr) {
    if (i.isDone == true) {
      done.push(i)
    }
    else {
      todo.push(i)
    }
  }
  this.done = done
  this.todo = todo
}

}