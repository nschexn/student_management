import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../../interfaces/student'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() students: Student[];
  
  ngOnInit(): void {
    console.log(this.students)
  }

}
