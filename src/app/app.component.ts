import { Component } from '@angular/core';

<<<<<<< HEAD
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

=======
>>>>>>> 5e4cb5e1ceb7537dedef1c76b37157e1c9c0fe29
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD

export class AppComponent {
  title = 'Now hiring for the following chores!!';
  // add chore here
  chore: Chores = {
    chore: 'Laundry',
    price: 1.00,
    name: '',
    day: 'Tuesday'
  };
  chores = CHORES;
}


=======
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
>>>>>>> 5e4cb5e1ceb7537dedef1c76b37157e1c9c0fe29
