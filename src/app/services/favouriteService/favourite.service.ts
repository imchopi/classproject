import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fav } from '../../home/interfaces/fav';
import { UserNotFoundException } from '../userService/user.service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private _favs: BehaviorSubject<Fav[]> = new BehaviorSubject<Fav[]>([]);
  public favs$: Observable<Fav[]> = this._favs.asObservable();

  constructor() {}

  getAll(): Observable<Fav[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        let favs: Fav[] = [{ userId: 1 }, { userId: 3 }, { userId: 5 }];
        this._favs.next(favs);
        observer.next(favs);
        observer.complete();
      }, 1000);
    });
  }

  addFav(id: number): Observable<Fav> {
    return new Observable((observer) => {
      setTimeout(() => {
        let _favs = [...this._favs.value];
        let _fav = {
          userId: id,
        };
        _favs.push(_fav);
        this._favs.next(_favs);
        observer.next(_fav);
        observer.complete();
      }, 1000);
    });
  }

  deleteFav(id: number): Observable<Fav> {
    let _favs = [...this._favs.value]
    return new Observable(observer => {
      setTimeout((() => {
        var index = _favs.findIndex(f => f.userId == id)
        if (index < 0)
          observer.error(new UserNotFoundException())
          else {
          _favs = [..._favs.slice(0, index), ..._favs.slice(index + 1)]
          this._favs.next(_favs)
          observer.next({userId:id})
        }
        observer.complete()
      }).bind(this), 500);
    })
  }


}
