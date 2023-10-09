import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../shared/components/user-info/user'
import { Fav } from '../../../shared/components/fav-info/fav'

@Pipe({
  name: 'favs'
})
export class FavsPipe implements PipeTransform {

  transform(users: User[] | null, favs: Fav[] | null): User[] {
    let _users = [...users??[]]
    _users = _users.map(u => {
      return {
        id: u.id,
        name: u.name,
        surname: u.surname,
        age: u.age,
        fav: favs?.reduce((p, f) => p || f.userId==u.id, false)??false,
      }
    })
    return _users;
  }

}
