import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, AfterViewInit {

  constructor(private loggingService: LoggingService, private studentDataService: StudentDataService) {


  }

  @ViewChild("studentName", { static: true }) stName: ElementRef;
  message: string = ''
  ngOnInit(): void {
    this.studentDataService.studentStatus.subscribe((data) => {
      this.message = `student with Id ${data.id} has been deleted`;
    });
  }

  ngAfterViewInit(): void {
    this.stName.nativeElement.focus();
  }
  addStudent(studentName: HTMLInputElement, status: HTMLInputElement) {
    this.studentDataService.addStudentToMaster({
      studentName: studentName,
      status: status
    })
    this.loggingService.logMessage(`${studentName} Added with  ${status} status`);
  }
}
