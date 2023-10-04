import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/assets/interfaces/user';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private _usersForTheObservable: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public usersOfTheObservable$:Observable<User[]> = this._usersForTheObservable.asObservable();

  constructor() {}

  onCardClicked(){
    
  }

  ngOnInit() {
    this._usersForTheObservable.next([
      {name: 'Adrián', surname: 'Perogil', age: 26},
      {name: 'Daniel', surname: 'Ávila', age: 19},
      {name: 'Juanjo', surname: 'Atienza', age: 26},
      {name: 'Chopito', surname: 'Chingón', age: 26},
      {name: 'Daniel', surname: 'Luque', age: 20},
    ])
  }

}
