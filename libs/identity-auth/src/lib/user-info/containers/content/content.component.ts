import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddAddress,
  AddUser,
  DeleteAddress,
  getDefaultUser,
} from '../../+store';
import { AppState } from '../../+store/app.state';
import { IAddress, IUserInfo } from '../../models';

@Component({
  selector: 'identity-auth-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  userProfile$: Observable<IUserInfo>;
  constructor(private store: Store<AppState>) {
    this.userProfile$ = this.store.select(getDefaultUser);
  }

  addAddress(address: IAddress) {
    this.store.dispatch(AddAddress({ address: address }));
  }

  deleteAddress(event: any) {
    this.store.dispatch(
      DeleteAddress({ userId: event.userId, addressId: event.addressId })
    );
  }

  userRegister(user: IUserInfo) {
    this.store.dispatch(AddUser({ user: user }));
  }
}
