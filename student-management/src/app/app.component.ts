import { Component } from '@angular/core';
import { StudentDataService } from './student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-management';
  students: { studentName: string, status: string }[] = [];

  constructor(private studentDataService: StudentDataService) { }

  ngOnInit() {
    this.students = this.studentDataService.students;

  }
}
