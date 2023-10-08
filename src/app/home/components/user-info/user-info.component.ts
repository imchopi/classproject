import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserInfoFavClicked } from 'src/app/home/interfaces/user-info-fav-clicked';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  private _id: number = 0;
  private _name: string = '';
  private _surname: string = '';
  private _age: number = 0;
  private _fav: boolean = false;

  @Output() onCardClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() onFavClicked: EventEmitter<UserInfoFavClicked> =
    new EventEmitter<UserInfoFavClicked>();
  @Output() onDeleteClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  @Input()
  user?: User;

  @Input()
  set id(new_id: number) {
    this._id = new_id;
  }
  get id(): number {
    return this._id;
  }

  @Input()
  set name(new_name: string) {
    this._name = new_name;
  }
  get name(): string {
    return this._name;
  }

  @Input()
  set surname(new_surname: string) {
    this._surname = new_surname;
  }
  get surname(): string {
    return this._surname;
  }

  @Input()
  set age(new_age: number) {
    this._age = new_age;
  }
  get age(): number {
    return this._age;
  }

  @Input()
  set fav(new_fav: boolean) {
    this._fav = new_fav;
  }
  get fav(): boolean {
    return this._fav;
  }

  onCardClick() {
    this.onCardClicked.emit();
  }

  onFavClick(event: any) {
    this.onFavClicked.emit({
      fav: !(this.user?.fav ?? false),
    });
    event.stopPropagation();
  }

  onDeleteClick(event: any) {
    this.onDeleteClicked.emit();
    event.stopPropagation();
  }

  ngOnInit(): void {}
}
