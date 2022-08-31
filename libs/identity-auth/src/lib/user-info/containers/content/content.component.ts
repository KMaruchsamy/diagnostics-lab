import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddAddress, AddUser, DeleteAddress } from '../../+store';
import { AppState } from '../../+store/app.state';
import { IAddress, IUserInfo } from '../../models';

@Component({
  selector: 'identity-auth-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(private store: Store<AppState>) {}

  addAddress(event: any) {
    this.store.dispatch(
      AddAddress({ userId: event.userId, address: event.address })
    );
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
