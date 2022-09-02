import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AddAddress,
  addAddressMessage,
  Address,
  addressId,
  BeforeRegisterMessage,
  city,
  defaultAddressMessage,
  DeleteAddress,
  deleteAddressMessage,
  email,
  IAddress,
  isDefault,
  IUserInfo,
  noAddressMessage,
  defaultPinCode,
  pinCode,
  register,
  reset,
  state,
  UserId,
  UserName,
  userRegisterMessage,
  defaultCity,
  defaultState,
} from '../../models';
import { v4 } from 'uuid';
import { AppState } from '../../+store/app.state';
import { Store } from '@ngrx/store';
import { getSelectedAddress } from '../../+store';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { Subscription } from 'rxjs';

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
  eventName: string;
  private subscriptions: Subscription = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
    this.eventName = '';
    this.identityForm = this.formBuilder.group({
      userId: [''],
      userName: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: this.formBuilder.group({
        addressId: [''],
        city: [defaultCity, Validators.required],
        state: [defaultState, Validators.required],
        pinCode: [defaultPinCode, Validators.required],
        isDefault: [true, Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  openDialog(message: string) {
    this.dialog.open(DialogModalComponent, {
      data: message,
    });
  }

  register(event: any): void {
    if (this.identityForm?.valid) {
      this.eventName = event.submitter.name;
      const userId = this.identityForm.get(UserId)?.value;
      const addressId = this.identityForm.get(Address)?.value.addressId;
      if (this.eventName === register) {
        this.setUniqueUser();
        this.setUniqueAddress();
        const userProfile: IUserInfo = {
          userId: this.identityForm.get(UserId)?.value,
          userName: this.identityForm.get(UserName)?.value,
          email: this.identityForm.get(email)?.value,
          address: [this.getAddress()],
        };
        this.userRegister.emit(userProfile);
        this.openDialog(userRegisterMessage);
      } else if (userId && this.eventName === AddAddress) {
        this.setUniqueAddress();
        this.addAddress.emit({ userId: userId, address: this.getAddress() });
        this.openDialog(addAddressMessage);
      } else if (userId && addressId && this.eventName === DeleteAddress) {
        this.deleteAddress.emit({
          userId: userId,
          addressId: addressId,
        });
        this.setAddress(userId);
      } else if (this.eventName !== reset) {
        this.openDialog(BeforeRegisterMessage);
      }
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
    const addressFormData = this.identityForm.get(Address);
    addressFormData?.get(city)?.setValue(defaultCity);
    addressFormData?.get(state)?.setValue(defaultState);
    addressFormData?.get(pinCode)?.setValue(defaultPinCode);
    addressFormData?.get(isDefault)?.setValue(true);
  }

  setAddress(userId: string) {
    this.subscriptions.add(
      this.store.select(getSelectedAddress(userId)).subscribe((address) => {
        this.dialog.closeAll();
        const addressFormStore = this.identityForm.get(Address);
        if (!address) {
          this.openDialog(noAddressMessage);
          addressFormStore?.get(pinCode)?.setValue(defaultPinCode);
          addressFormStore?.get(isDefault)?.setValue(true);
        } else {
          addressFormStore?.patchValue(address);
          if (
            address.pinCode === defaultPinCode &&
            this.eventName === DeleteAddress
          ) {
            this.openDialog(defaultAddressMessage);
          } else if (this.eventName === DeleteAddress) {
            this.openDialog(deleteAddressMessage);
          }
        }
      })
    );
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
      isDefault: addressForm?.value.pinCode === defaultPinCode ? true : false,
    };
    return address;
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
