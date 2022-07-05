import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../services/crud.service';

export class TODO {
  $key: string;
  title: string;
  nom: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})

export class TodoListPage implements OnInit {

  Tasks: TODO[];

  constructor(private crudService: CrudService, private route: Router) { }

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });
  }

  todoList() {
    this.crudService.getTasks()
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }  

  async task(){
    this.route.navigate(['/create-task']);
  }

}
