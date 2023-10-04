import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../assets/interfaces/user'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})

export class UserInfoComponent implements OnInit {

  private _name: string = '';
  private _surname: string = '';
  private _age: number = 0;

  @Output() collectedClick:EventEmitter<void> = new EventEmitter<void>;

  constructor() {}

  @Input()
  user?: User;

  @Input() 
  set name(new_name: string) {this._name = new_name}
  get name(): string {return this._name}

  @Input() 
  set surname(new_surname: string) {this._surname = new_surname}
  get surname(): string {return this._surname}

  @Input() 
  set age(new_age: number) {this._age = new_age}
  get age(): number {return this._age}

  onCardClick(){
    this.collectedClick.emit;
  }

  ngOnInit(): void {

  }

}
