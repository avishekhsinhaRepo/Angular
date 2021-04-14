import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styles: [
  ]
})
export class StudentsListComponent implements OnInit {

  studentList: Student[] = [];
  constructor(private studentsService: StudentsService) { }
  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((data) => {
      console.log(data);
      this.studentList = data;
      this.studentsService.studentListSubject.next(data);

    });


  }

}
