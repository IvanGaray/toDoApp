import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  title = 'To do List';

  todos:Todo[]=[];
  inputToDo:string=''
  constructor() {}

  ngOnInit(): void {
    
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

    deleteTodo(id:number){
      this.todos =this.todos.filter((v,i)=> i!==id);
    }

    
    addTodo(){
      this.todos.push({
        content:this.inputToDo,
        completed:false,
      });
      this.inputToDo='';
    }
}
