import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {

  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }
  selectedStudent;
  ngOnInit(): void {
    let studentId: number = parseInt(this.route.snapshot.params['id']);
    this.selectedStudent = this.studentService.getStudents().find(element => element.id === studentId);
    console.log(this.selectedStudent);
  }

}
