import { UserRootState } from './reducers/user.reducers';

export type AppState = UserRootState; /* & OtherRootState  & ... */
