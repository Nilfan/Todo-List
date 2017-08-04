import { Component } from '@angular/core';
import { Todo } from './shared/todo';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Todo-List';
    todos: Todo[] = [
        {
            title: 'Angular 2',
            completed: false,
            changing: false
        },
        {
            title:'TypeScript',
            completed: false,
            changing: false
        },
        {
            title:'Fan',
            completed: false,
            changing: false
        }
    
    ];


    create(title: string){
        const todo: Todo = new Todo(title);
        this.todos.push(todo);
    }
    
}
