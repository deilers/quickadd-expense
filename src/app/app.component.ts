import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  form: FormGroup;

  title = 'quickadd-expenses';

  ngOnInit(): void {
    this.form = new FormGroup({});
  }
}
