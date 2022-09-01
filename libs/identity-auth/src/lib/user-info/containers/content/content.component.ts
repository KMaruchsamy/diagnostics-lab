import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  AddAddress,
  AddUser,
  DeleteAddress,
  DeleteUser,
  getFilteredUsers,
} from '../../+store';
import { AppState } from '../../+store/app.state';
import { IUserInfo } from '../../models';

@Component({
  selector: 'identity-auth-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'address', 'userId'];
  userDetails$?: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userDetails$ = this.store.select(getFilteredUsers);
  }

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

  deleteUser(userId: string) {
    this.store.dispatch(DeleteUser({ userId: userId }));
  }
}
