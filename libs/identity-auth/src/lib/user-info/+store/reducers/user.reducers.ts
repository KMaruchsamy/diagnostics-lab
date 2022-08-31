import { createReducer, on } from '@ngrx/store';
import { IUserInfo } from '../../models';
import {
  AddUser,
  AddUserSuccess,
  AddUserFail,
  AddAddress,
  AddAddressSuccess,
  AddaddressFail,
  DeleteAddress,
  DeleteAddressSuccess,
  DeleteAddressFail,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFail,
} from '../actions/user.actions';

export interface userState {
  userInfo: IUserInfo[];
}
export const userFeatureKey = 'user';

export interface UserRootState {
  [userFeatureKey]: userState;
}
const initialState: userState = {
  userInfo: [],
};

export const userInfoReducer = createReducer(
  initialState,
  on(AddUser, (state, { user }) => ({
    ...state,
    userInfo: [...state.userInfo, user],
    loading: true,
    loaded: false,
  })),
  on(AddUserSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(AddUserFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(DeleteUser, (state, { userId }) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(DeleteUserSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(DeleteUserFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(AddAddress, (state, { userId, address }) => ({
    ...state,
    userInfo: [
      ...state.userInfo.map((user) => {
        if (user.userId === userId) {
          return {
            ...user,
            address: [...user.address, address],
          };
        } else {
          return user;
        }
      }),
    ],
    loading: true,
    loaded: false,
  })),
  on(AddAddressSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(AddaddressFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(DeleteAddress, (state, { userId, addressId }) => {
    return {
      ...state,
      userInfo: [
        ...state.userInfo.map((user) => {
          if (user.userId === userId) {
            return {
              ...user,
              address: user.address.filter(
                (f) => f.addressId !== addressId || f.isDefault
              ),
            };
          } else {
            return user;
          }
        }),
      ],
      loading: true,
      loaded: false,
    };
  }),
  on(DeleteAddressSuccess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(DeleteAddressFail, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  }))
);
