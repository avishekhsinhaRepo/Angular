import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activateRoute.snapshot.params['id'],
      name: this.activateRoute.snapshot.params['name']
    }

    this.activateRoute.params.subscribe((user: Params) => {
      this.user = {
        id: user.id,
        name: user.name
      }
    })
  }

}
