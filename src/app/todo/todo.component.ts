import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoInterface } from '../interfaces/todo-interface';
import { TODOS } from '../mocks/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoInterface[] = TODOS;
  newTodo: TodoInterface = new Todo();

  constructor() { }

  addTodo() {
    const lastIndex: number = this.todos.length - 1;
    const last: TodoInterface = this.todos[lastIndex];
    this.newTodo.id = last.id + 1;
    if (this.newTodo.name.trim().length >= 1) {
      this.todos.push(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  toggleCompleteTodo(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeleteTodo(todo: TodoInterface) {
    todo.isDeleted = !todo.isDeleted;
  }

  deleteTodo(todo: TodoInterface) {
    const remove: number = this.todos.indexOf(todo);
    if (remove !== -1) {
      this.todos.splice(remove, 1);
    }
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Uncomplete' : 'Complete';
  }

  ngOnInit() {
  }

}
