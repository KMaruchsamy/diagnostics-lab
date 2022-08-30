import { AppState } from '../app.state';
import { userFeatureKey } from '../reducers';

export const getAllUsers = (state: AppState) => state[userFeatureKey].userInfo;
