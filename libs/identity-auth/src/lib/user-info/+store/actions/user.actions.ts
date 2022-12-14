import { props, createAction } from '@ngrx/store';
import { IAddress, IUserInfo } from '../../models';

export const AddUser = createAction(
  '[Add] User ',
  props<{ user: IUserInfo }>()
);
// TODO further enhancement
// export const AddUserSuccess = createAction('[Add] User Success');
// export const AddUserFail = createAction(
//   '[Add] User Fail',
//   props<{ error: string }>()
// );
export const DeleteUser = createAction(
  '[Delete] User ',
  props<{ userId: string }>()
);
// TODO further enhancement
// export const DeleteUserSuccess = createAction('[Delete] User Success');
// export const DeleteUserFail = createAction(
//   '[Delete] User Fail',
//   props<{ error: string }>()
// );
export const AddAddress = createAction(
  '[Add] Address ',
  props<{ userId: string; address: IAddress }>()
);
// TODO further enhancement
// export const AddAddressSuccess = createAction('[Add] Address Success');
// export const AddaddressFail = createAction(
//   '[Add] Address Fail',
//   props<{ error: string }>()
// );
export const DeleteAddress = createAction(
  '[Delete] Address ',
  props<{ userId: string; addressId: string }>()
);
// TODO further enhancement
// export const DeleteAddressSuccess = createAction('[Delete] Address Success');
// export const DeleteAddressFail = createAction(
//   '[Delete] Address Fail',
//   props<{ error: string }>()
// );
