import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AddAddress,
  Address,
  addressId,
  DeleteAddress,
  email,
  IAddress,
  IUserInfo,
  pinCode,
  register,
  UserId,
  UserName,
} from '../../models';
import { v4 } from 'uuid';
import { AppState } from '../../+store/app.state';
import { Store } from '@ngrx/store';
import { getSelectedAddress } from '../../+store';
import { filter } from 'rxjs';

@Component({
  selector: 'identity-auth-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {
  @Output() addAddress: EventEmitter<{ userId: string; address: IAddress }> =
    new EventEmitter();
  @Output() deleteAddress: EventEmitter<{ userId: string; addressId: string }> =
    new EventEmitter();
  @Output() userRegister: EventEmitter<IUserInfo> = new EventEmitter();
  identityForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.identityForm = this.formBuilder.group({
      userId: [''],
      userName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(10)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: this.formBuilder.group({
        addressId: [''],
        city: ['Bangalore', Validators.required],
        state: ['Karnataka', Validators.required],
        pinCode: ['123456', Validators.required],
        isDefault: [true, Validators.required],
      }),
    });
  }

  ngOnInit(): void {}
  register(event: any): void {
    if (this.identityForm?.valid) {
      const userId = this.identityForm.get(UserId)?.value;
      const addressId = this.identityForm.get(Address)?.value.addressId;
      if (event.submitter.name === register) {
        this.setUniqueUser();
        this.setUniqueAddress();
        const userProfile: IUserInfo = {
          userId: this.identityForm.get(UserId)?.value,
          userName: this.identityForm.get(UserName)?.value,
          email: this.identityForm.get(email)?.value,
          address: [this.getAddress()],
        };
        this.userRegister.emit(userProfile);
      }
      if (userId && event.submitter.name === AddAddress) {
        this.setUniqueAddress();
        this.addAddress.emit({ userId: userId, address: this.getAddress() });
      } else if (
        userId &&
        addressId &&
        event.submitter.name === DeleteAddress
      ) {
        this.deleteAddress.emit({
          userId: userId,
          addressId: addressId,
        });
        this.setAddress(userId);
      }
    }
  }

  setAddress(userId: string) {
    this.store
      .select(getSelectedAddress(userId))
      .pipe(filter((f) => !!f))
      .subscribe((address) => {
        this.identityForm.get(Address)?.patchValue(address);
      });
  }

  setUniqueUser() {
    const userUuid = v4();
    this.identityForm.get(UserId)?.setValue(userUuid);
  }

  setUniqueAddress() {
    const addressUuid = v4();
    this.identityForm.get(Address)?.get(addressId)?.setValue(addressUuid);
  }

  getAddress() {
    const addressForm = this.identityForm.get(Address);
    const address: IAddress = {
      addressId: addressForm?.value.addressId,
      city: addressForm?.value.city,
      state: addressForm?.value.state,
      pinCode: addressForm?.value.pinCode,
      isDefault: addressForm?.value.pinCode === pinCode ? true : false,
    };
    return address;
  }
}
