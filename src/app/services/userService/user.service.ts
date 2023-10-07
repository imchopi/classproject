import { Injectable } from '@angular/core';
import { User } from '../../home/interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

export class UserNotFoundException extends Error {
  // . declare any additional properties or methods .
}


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _usersForTheObservable: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  public usersOfTheObservable$: Observable<User[]> =
    this._usersForTheObservable.asObservable();

  constructor() {}

  getAll(): Observable<User[]> {
    return new Observable(observer => {
      setTimeout(() => {
        var users: User[] = [
          { id: 1, name: 'Adrián', surname: 'Perogil', age: 26, fav: true },
          { id: 2, name: 'Daniel', surname: 'Ávila', age: 19, fav: true },
          { id: 3, name: 'Juanjo', surname: 'Atienza', age: 26, fav: false },
          { id: 4, name: 'Chopito', surname: 'Chingón', age: 26, fav: false },
          { id: 5, name: 'Daniel', surname: 'Luque', age: 20, fav: true },
        ];
        this._usersForTheObservable.next(users);
        observer.next(users);
        observer.complete();
      }, 1000);
    });
  }
}
