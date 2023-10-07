import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/home/interfaces/user';
import { Router } from '@angular/router';
import { UserInfoFavClicked } from './interfaces/user-info-fav-clicked';
import { ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _usersForTheObservable: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  public usersOfTheObservable$: Observable<User[]> =
    this._usersForTheObservable.asObservable();

  constructor(private _router: Router, private _toast: ToastController) {}

  goToWelcome() {
    this._router.navigate(['./welcome']);
  }

  onCardClicked() {}

  ngOnInit() {
    var users: User[] = [
      { id: 1, name: 'Adrián', surname: 'Perogil', age: 26, fav: true },
      { id: 2, name: 'Daniel', surname: 'Ávila', age: 19, fav: true },
      { id: 3, name: 'Juanjo', surname: 'Atienza', age: 26, fav: false },
      { id: 4, name: 'Chopito', surname: 'Chingón', age: 26, fav: false },
      { id: 5, name: 'Daniel', surname: 'Luque', age: 20, fav: true },
    ];
    this._usersForTheObservable.next(users);
  }

  onFavClicked(user: User, event: UserInfoFavClicked) {
    const users = [...this._usersForTheObservable.value];
    var index = users.findIndex(
      (_usersForTheObservable) => _usersForTheObservable.id == user.id
    );
    if (index != -1) {
      users[index].fav = event.fav ?? false;
    }
    this._usersForTheObservable.next([...users]);
    const options: ToastOptions = {
      message: `${user.name} ${event.fav ? 'added' : 'removed'} ${
        event.fav ? 'to' : 'from'
      } favourites`,
      duration: 1000,
      position: 'bottom',
      color: 'danger',
      cssClass: 'fav-ion-toast',
    };
    this._toast.create(options).then((toast) => toast.present());
  }
}
