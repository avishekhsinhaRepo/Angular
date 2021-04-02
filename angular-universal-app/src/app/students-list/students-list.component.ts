import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styles: [
  ]
})
export class StudentsListComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }
  studentList = []
  ngOnInit(): void {
    this.studentList = this.studentsService.getStudents();
  }

}
