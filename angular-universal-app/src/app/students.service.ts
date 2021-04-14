import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Student } from './model/student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentListSubject = new BehaviorSubject<Student[]>(null);
  constructor(private http: HttpClient) { }

  /* private studentList = [
    { id: 1, firstName: 'John', lastName: 'Doe', profileImage: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { id: 2, firstName: 'Don', lastName: 'Wilson', profileImage: 'https://randomuser.me/api/portraits/men/87.jpg' },
    { id: 3, firstName: 'Max', lastName: 'Millan', profileImage: 'https://randomuser.me/api/portraits/men/88.jpg' },
  ] */


  getStudents() {
    return this.http.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }


}
