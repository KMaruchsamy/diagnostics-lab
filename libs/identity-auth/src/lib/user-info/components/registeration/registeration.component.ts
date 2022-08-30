import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AddAddress,
  Address,
  DeleteAddress,
  IAddress,
  IUserInfo,
  UserId,
} from '../../models';
import { v4 } from 'uuid';

@Component({
  selector: 'identity-auth-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {
  @Output() addAddress: EventEmitter<IAddress> = new EventEmitter();
  @Output() deleteAddress: EventEmitter<{ userId: string; addressId: string }> =
    new EventEmitter();
  @Input() userProfile: any;
  identityForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.identityForm = this.formBuilder.group({
      userId: ['', Validators.required],
      userName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(10)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: this.formBuilder.group({
        addressId: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pinCode: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.identityForm.patchValue(this.userProfile);
    this.identityForm.get(Address)?.patchValue(this.userProfile.address[0]);
  }
  register(event: any): void {
    const userId = this.identityForm.get(UserId)?.value;
    const addressForm = this.identityForm.get(Address);
    if (addressForm?.valid) {
      if (event.submitter.name === AddAddress) {
        const address: IAddress = {
          userId: userId,
          addressId: v4(),
          city: addressForm.value.city,
          state: addressForm.value.state,
          pinCode: addressForm.value.pinCode,
          isDefault: false,
        };
        this.addAddress.emit(address);
      } else if (event.submitter.name === DeleteAddress) {
        this.deleteAddress.emit({
          userId: userId,
          addressId: addressForm.value.addressId,
        });
      }
    }
  }
}
