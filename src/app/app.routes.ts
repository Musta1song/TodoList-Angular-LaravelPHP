import { Routes } from '@angular/router';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { TodolistComponent } from './components/todolist/todolist.component';

export const routes: Routes = [

    {
        path: '',
        component: TodolistComponent
      },
      {
        path: 'addtodo',
        component: AddtodoComponent
      }
];
