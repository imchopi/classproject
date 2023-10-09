import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FirstLetterPipe } from './pipes/firstLetter/first-letter.pipe';
import { FavInfoComponent } from './components/fav-info/fav-info.component';
import { FavsPipe } from './pipes/favs/favs.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    UserInfoComponent,
    FirstLetterPipe,
    FavInfoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    UserInfoComponent,
    FavInfoComponent,
  ]
})
export class SharedModule { }
