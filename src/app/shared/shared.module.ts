import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FirstLetterPipe } from './pipes/firstLetter/first-letter.pipe';
import { FavInfoComponent } from './components/fav-info/fav-info.component';
import { FavsPipe } from './pipes/favs/favs.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserFormComponent } from './components/userform/userform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    FavsPipe,
    UserInfoComponent,
    UserFormComponent,
    FavInfoComponent,
    FirstLetterPipe,
    
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    UserInfoComponent,
    FavInfoComponent,
    IonicModule,
    FormsModule,
    HighlightDirective,
    FavsPipe,
    UserFormComponent,
  ],
})
export class SharedModule {}
