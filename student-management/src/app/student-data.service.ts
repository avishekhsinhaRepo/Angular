import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  students = [
    {
      studentName: 'John',
      status: 'Active'
    },
    {
      studentName: 'Max',
      status: 'Inactive'
    }
    , {
      studentName: 'Rob',
      status: 'Active'
    }
  ]

  studentStatus = new EventEmitter();
  addStudentToMaster(event) {
    this.students.push(event);
  }

  deleteStudentFromMaster(event) {
    this.students.splice(event, 1);
  }
}
