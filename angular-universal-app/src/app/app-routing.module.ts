import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home-v2', component: HomeComponent },
  { path: 'studentlist', component: StudentsListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
