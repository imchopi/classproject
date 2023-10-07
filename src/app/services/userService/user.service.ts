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
  
  public getUser(id:number):Observable<User>{
    return new Observable(observer=>{
      setTimeout(() => {
        var user = this._usersForTheObservable.value.find(user=>user.id==id);
        if(user)
          observer.next(user);
        else 
          observer.error(new UserNotFoundException());
        observer.complete();
      }, 1000);
      
    })
    
  }

  public updateUser(user:User):Observable<User>{
    return new Observable(observer=>{
      setTimeout(() => {
        var _usersForTheObservable = [...this._usersForTheObservable.value];
        var index = _usersForTheObservable.findIndex(u=>u.id==user.id);
        if(index<0)
          observer.error(new UserNotFoundException());
        else{
          _usersForTheObservable[index]=user;
          observer.next(user);
          this._usersForTheObservable.next(_usersForTheObservable);
        }
        observer.complete();
      }, 500);
      
    });
    
  }

  public deleteUser(user:User):Observable<User>{
    return new Observable(observer=>{
      setTimeout(() => {
        var _usersForTheObservable = [...this._usersForTheObservable.value];
        var index = _usersForTheObservable.findIndex(u=>u.id==user.id);
        if(index<0)
          observer.error(new UserNotFoundException());
        else{
          _usersForTheObservable = [..._usersForTheObservable.slice(0,index),..._usersForTheObservable.slice(index+1)];
          this._usersForTheObservable.next(_usersForTheObservable);
          observer.next(user);
        }
        observer.complete();
      }, 500);
      
    });
  }

  public deleteAll():Observable<void>{
    return new Observable(observer=>{
      setTimeout(() => {
        this._usersForTheObservable.next([]);
        observer.next();
        observer.complete();  
      }, 1000);
    });
  }
}
