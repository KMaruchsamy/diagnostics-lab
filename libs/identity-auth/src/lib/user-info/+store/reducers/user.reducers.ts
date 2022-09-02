import { createReducer, on } from '@ngrx/store';
import { IUserInfo } from '../../models';
import {
  AddUser,
  AddAddress,
  DeleteAddress,
  DeleteUser,
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
  on(DeleteUser, (state, { userId }) => ({
    ...state,
    userInfo: [...state.userInfo.filter((user) => user.userId !== userId)],
    loading: true,
    loaded: false,
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
  })
);
