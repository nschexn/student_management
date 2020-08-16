import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Student } from './interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  students: Student[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.students = this.getStudents();
  }

  getStudents() {
    debugger;
    return this.dataService.students;
  }
}
