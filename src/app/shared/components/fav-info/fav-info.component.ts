import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from '../user-info/user';

@Component({
  selector: 'app-fav-info',
  templateUrl: './fav-info.component.html',
  styleUrls: ['./fav-info.component.scss'],
})
export class FavInfoComponent  implements OnInit {

  @Input() id:number | undefined
  name?: string = ""

  constructor(private user: UserService) { 
  }
  
  ngOnInit() {
    this.user.usersOfTheObservable$.subscribe(
      observe => { 
        let user: User | undefined = observe.find(user => this.id == user.id)
        this.name = user?.name
    })
  }

  @Output() deletedFav:EventEmitter<void> = new EventEmitter<void>

  deleteFav(event: any){
    this.deletedFav.emit()
    event.stopPropagation();
  }

}
