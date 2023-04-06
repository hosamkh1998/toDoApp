import { Component, OnInit } from '@angular/core';
import {
  doc,
  onSnapshot,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { environment, app, db, auth } from 'src/environments/environment';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  localTodos: any[] = [
    { id: 't101', title: 'Todo one',description: 'this is the first todo', completed: true ,arshifed: false},
    { id: 't102', title: 'Todo two',description: 'this is the second todo', completed: false,arshifed: false },
    { id: 't103', title: 'Todo three',description: 'this is the third todo', completed: false,arshifed: false },
    { id: 't104', title: 'Todo four',description: 'this is the fourth todo', completed: false,arshifed: false },
    { id: 't105', title: 'Todo five',description: 'this is the fifth todo', completed: false,arshifed: false },
    { id: 't106', title: 'Todo six',description: 'this is the sixth todo', completed: false,arshifed: false },
  ];

  currTodo: any = { id: '', title: '',description: '', completed: false ,arshifed: false};

  modalDetails: any = {title: 'no title yet',btn:'no btn yet',status: 0};

  constructor() { }

  ngOnInit(): void {
    this.getFromLocalStorage();
  }


  // saveToArchive(todo: any) {
  //   let currTodo = this.localTodos.find((t:any) => t.id === todo.id);
  //   currTodo.arshifed = true;
  // }

  removeToDo(todo:any){
    let idx = this.localTodos.findIndex((t:any) => t.id === todo.id);
    this.localTodos.splice(idx,1);
    this.setToLocalStorage();
  }

  //function make id
  _makeId(length = 5) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  restartModal(){
    this.modalDetails = {title: 'no title yet',btn:'no btn yet',status: 0};
    this.currTodo = { id: '', title: '',description: '', completed: false ,arshifed: false};
  }

  todoToAction(todo:any){
    this.currTodo.id = todo.id;
    this.currTodo.title = todo.title;
    this.currTodo.description = todo.description;
    this.currTodo.completed = todo.completed;
    this.currTodo.arshifed = todo.arshifed;
  }

  saveTodo(){
    if(this.currTodo.id){
      let idx = this.localTodos.findIndex((t:any) => t.id === this.currTodo.id);
      this.localTodos.splice(idx,1,this.currTodo);
    }else{
      this.currTodo.id = this._makeId(15);
      this.localTodos.unshift(this.currTodo);
      this.addTodo();
    }
    this.restartModal();
    this.setToLocalStorage();
  }

  changeTodoStatus(todo:any){
    let idx = this.localTodos.findIndex((t:any) => t.id === todo.id);
    this.localTodos[idx].completed = !this.localTodos[idx].completed;
    this.setToLocalStorage();
  }

  setToLocalStorage(){
    localStorage.setItem('todos',JSON.stringify(this.localTodos));
  }

  getFromLocalStorage() {
    if (localStorage.getItem('todos'))
      this.localTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  async addTodo() {
    await setDoc(doc(collection(db, 'todos')), {
      title: this.currTodo.title,
      description: this.currTodo.description,
      completed: this.currTodo.completed,
      arshifed: this.currTodo.arshifed,
    });
  }

}
