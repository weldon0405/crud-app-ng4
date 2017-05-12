import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Now hiring for the following chores!!';
  //add chore here
  chore: Chores = {
    chore: 'Laundry',
    price: 1,
    person: 'Weldon',
    day: 'Tuesday'}
}

export class Chores {
  chore: string;
  price: number;
  person: string;
  day: string;
}