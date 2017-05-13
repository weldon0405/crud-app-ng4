import { Component } from '@angular/core';

export class Chores {
  chore: string;
  price: number;
  name: string;
  day: string;
}

const CHORES: Chores[] = [
  { chore: 'wash dishes', price: 1, name: '', day: 'Monday' },
  { chore: 'dust living room', price: 1, name: '', day: 'Sunday' },
  { chore: 'dust play room', price: 1, name: '', day: 'Wednesday' },
  { chore: 'vacuum computer room', price: 1, name: '', day: 'Thursday' },
  { chore: 'mow grass', price: 1, name: '', day: 'Saturday' },
  { chore: 'rake leaves', price: 1, name: '', day: 'Saturday' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Now hiring for the following chores!!';
  chores = CHORES;  
  chore: Chores = {
    chore: 'Laundry',
    price: 1.00,
    name: '',
    day: 'Tuesday'
  };
}
