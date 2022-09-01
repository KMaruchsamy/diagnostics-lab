import { mockUser } from '../../models';
import { AddAddress, AddUser, DeleteAddress, DeleteUser } from '../actions';
import { userInfoReducer, userState } from './user.reducers';
const initialState: userState = {
  userInfo: [],
};

describe('User Info Reducer', () => {
  it('should return the previous state', () => {
    // arrange
    const action = {} as any;
    // act
    const result = userInfoReducer(initialState, action);
    // assert
    expect(result).toBe(initialState);
  });

  it('should add new user in userprofile when AddUser action dispatched', () => {
    // arrange
    const action = AddUser({ user: mockUser });
    const expected = { loaded: false, loading: true, userInfo: [mockUser] };
    // act
    const result = userInfoReducer(initialState, action);
    // assert
    expect(result).toEqual(expected);
  });

  it('should delete old user when DeleteUser action dispatched', () => {
    // arrange
    const action = DeleteUser({
      userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
    });
    const expected = { loaded: false, loading: true, userInfo: [] };
    // act
    const result = userInfoReducer(initialState, action);
    // assert
    expect(result).toEqual(expected);
  });

  it('should add address when AddAddress action dispatched', () => {
    // arrange
    const payload = {
      addressId: '667c35a3-7193-4e81-a338-bf5e01b05780',
      city: 'Bangalore',
      state: 'Karnataka',
      pinCode: 123451,
      isDefault: false,
    };
    const action = AddAddress({
      userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
      address: payload,
    });
    initialState.userInfo.push(mockUser);
    mockUser.address.push(payload);
    const expected = {
      loaded: false,
      loading: true,
      userInfo: [
        {
          address: [
            {
              addressId: '026f6642-61bc-4aba-9507-094a355d5e9d',
              city: 'Bangalore',
              isDefault: true,
              pinCode: 123456,
              state: 'Karnataka',
            },
            {
              addressId: '667c35a3-7193-4e81-a338-bf5e01b05780',
              city: 'Bangalore',
              isDefault: false,
              pinCode: 123451,
              state: 'Karnataka',
            },
            {
              addressId: '667c35a3-7193-4e81-a338-bf5e01b05780',
              city: 'Bangalore',
              isDefault: false,
              pinCode: 123451,
              state: 'Karnataka',
            },
          ],
          email: 'karthik@gmail.com',
          userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
          userName: 'Karthik',
        },
      ],
    };
    // act
    const result = userInfoReducer(initialState, action);
    // assert
    expect(result).toEqual(expected);
  });

  it('should remove address when DeleteAddress action dispatched', () => {
    // arrange
    const action = DeleteAddress({
      userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
      addressId: '667c35a3-7193-4e81-a338-bf5e01b05780',
    });
    initialState.userInfo.push(mockUser);
    const expected = {
      loaded: false,
      loading: true,
      userInfo: [
        {
          address: [
            {
              addressId: '026f6642-61bc-4aba-9507-094a355d5e9d',
              city: 'Bangalore',
              isDefault: true,
              pinCode: 123456,
              state: 'Karnataka',
            },
          ],
          email: 'karthik@gmail.com',
          userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
          userName: 'Karthik',
        },
        {
          address: [
            {
              addressId: '026f6642-61bc-4aba-9507-094a355d5e9d',
              city: 'Bangalore',
              isDefault: true,
              pinCode: 123456,
              state: 'Karnataka',
            },
          ],
          email: 'karthik@gmail.com',
          userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
          userName: 'Karthik',
        },
      ],
    };
    // act
    const result = userInfoReducer(initialState, action);

    // assert
    expect(result).toEqual(expected);
  });
});
