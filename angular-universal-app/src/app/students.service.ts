import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  private studentList = [
    { id: 1, firstName: 'John', lastName: 'Doe', profileImage: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { id: 2, firstName: 'Don', lastName: 'Wilson', profileImage: 'https://randomuser.me/api/portraits/men/87.jpg' },
    { id: 3, firstName: 'Max', lastName: 'Millan', profileImage: 'https://randomuser.me/api/portraits/men/88.jpg' },
  ]


  getStudents() {
    return this.studentList.slice();
  }
}
