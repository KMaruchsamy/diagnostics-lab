import { createSelector } from '@ngrx/store';
import { IUserInfo } from '../../models';
import { AppState } from '../app.state';
import { userFeatureKey } from '../reducers';

export const getAllUsers = (state: AppState) => state[userFeatureKey]?.userInfo;

export const getDefaultUser = createSelector(
  getAllUsers,
  (users): IUserInfo => {
    return users[0];
  }
);
