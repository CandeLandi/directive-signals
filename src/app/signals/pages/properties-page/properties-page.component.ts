import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss'
})
export class PropertiesPageComponent {

public user = signal<User>({
  "id": 1,
  "email": "george.bluth@reqres.in",
   "first_name": "George",
  "last_name": "Bluth",
  "avatar": "https://reqres.in/img/faces/1-image.jpg",
})


  onFieldUpdated(field: string, value: string) {

    console.log(field, value)
  }
}
