import { Component, OnInit, Input } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentDataService: StudentDataService) { }
  @Input() students;
  ngOnInit(): void {
  }
  deleteStudent(id: string) {
    this.studentDataService.deleteStudentFromMaster(id);
    this.studentDataService.studentStatus.emit({ 'id': id });

  }
}
