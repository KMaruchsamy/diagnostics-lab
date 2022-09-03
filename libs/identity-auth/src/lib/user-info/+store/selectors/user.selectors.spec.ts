import { mockUser } from '../../models';
import { getFilteredUsers, getSelectedAddress } from './user.selectors';

describe('User Selectors', () => {
  it('should return filtered users', () => {
    const actual = getFilteredUsers.projector([mockUser]);
    const expected = [
      {
        address: {
          addressId: '026f6642-61bc-4aba-9507-094a355d5e9d',
          city: 'Bangalore',
          isDefault: true,
          pinCode: 123456,
          state: 'Karnataka',
        },
        email: 'karthik@gmail.com',
        userId: '7f36e02f-09c7-4d79-aad7-90d519371b71',
        userName: 'Karthik',
      },
    ];
    expect(actual).toEqual(expected);
  });

  it('should return null when no users available', () => {
    const actual = getFilteredUsers.projector([]);
    expect(actual).toEqual(null);
  });

  it('should return the selected address', () => {
    const actual = getSelectedAddress(
      '7f36e02f-09c7-4d79-aad7-90d519371b71'
    ).projector([mockUser]);
    expect(actual).toEqual(mockUser.address[0]);
  });

  it('should return null when no address found', () => {
    const actual = getSelectedAddress(
      '7f36e02f-09c7-4d79-aad7-90d519371b71'
    ).projector([]);
    expect(actual).toEqual(null);
  });
});
