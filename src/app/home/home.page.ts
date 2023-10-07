import { Component } from '@angular/core';
import { User } from 'src/app/home/interfaces/user';
import { Router } from '@angular/router';
import { UserInfoFavClicked } from './interfaces/user-info-fav-clicked';
import { ToastController, ToastOptions } from '@ionic/angular';
import { UserService } from '../services/userService/user.service';
import { FavouriteService } from '../services/favouriteService/favourite.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loading: boolean = false;

  constructor(
    private _router: Router,
    private _toast: ToastController,
    public users: UserService,
    public favs: FavouriteService
  ) {}

  goToWelcome() {
    this._router.navigate(['./welcome']);
  }

  ngOnInit(): void {
    this.loading = true;
    zip(this.users.getAll(), this.favs.getAll()).subscribe((results) => {
      this.loading = false;
    });
  }

  onFavClicked(user: User, event: UserInfoFavClicked) {
    /*const users = [...this._usersForTheObservable.value];
    var index = users.findIndex(
      (_usersForTheObservable) => _usersForTheObservable.id == user.id
    );
    if (index != -1) {
      users[index].fav = event.fav ?? false;
    }
    this._usersForTheObservable.next([...users]);*/
    var obs = event?.fav
      ? this.favs.addFav(user.id)
      : this.favs.deleteFav(user.id);
    obs.subscribe({
      next: (_) => {
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
      },
      error: (err) => console.log(err),
    });
  }

  public onDeleteClicked(user:User){
    var _user:User = {...user};

    this.users.deleteUser(_user).subscribe(
        {next: user=>{
        //Notificamos con un Toast que se ha pulsado
        const options:ToastOptions = {
          message:`User deleted`, //mensaje del toast
          duration:1000, // 1 segundo
          position:'bottom', // el toast se situa en la parte inferior
          color:'danger', // color del toast
          cssClass:'fav-ion-toast' //Una clase que podemos poner en global.scss para configurar el ion-toast
        };
        //creamos el toast
        this._toast.create(options).then(toast=>toast.present());
        },
        error: err=>{
          console.log(err);
        }
      });
  }

  public async onCardClicked(){
    const options:ToastOptions = {
      message:"User clicked the card",
      duration:1000,
      position:'bottom',
      color:'tertiary',
      cssClass:'card-ion-toast'
    };
    const toast = await this._toast.create(options);
    toast.present();
  }
}
