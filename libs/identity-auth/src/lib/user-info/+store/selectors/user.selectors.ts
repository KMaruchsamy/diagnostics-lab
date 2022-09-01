import { createSelector } from '@ngrx/store';
import { email } from '../../models';
import { AppState } from '../app.state';
import { userFeatureKey } from '../reducers';

export const getAllUsers = (state: AppState) => state[userFeatureKey]?.userInfo;

export const getFilteredUsers = createSelector(getAllUsers, (users) => {
  if (!users) {
    return null;
  }
  if (!users.length) {
    return null;
  }
  return users.map((user) => {
    return {
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      address: user.address.find((f) => f.isDefault),
    };
  });
});

export const getSelectedAddress = (userId: string) =>
  createSelector(getAllUsers, (users): any => {
    if (!users) {
      return null;
    }
    if (!users.length) {
      return null;
    }
    return users.find((t) => t.userId === userId)?.address.slice(-1)[0];
  });
