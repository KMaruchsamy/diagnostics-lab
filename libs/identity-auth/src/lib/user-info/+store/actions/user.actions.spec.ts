import { AddAddress, AddUser, DeleteAddress, DeleteUser } from './user.actions';

describe('User Actions', () => {
  describe('User', () => {
    it('should create an instance : AddUser', () => {
      expect(AddUser).toBeTruthy();
    });

    it('should create an instance : DeleteUser', () => {
      expect(DeleteUser).toBeTruthy();
    });
  });

  describe('Address', () => {
    it('should create an instance : AddAddress', () => {
      expect(AddAddress).toBeTruthy();
    });
    it('should create an instance : DeleteAddress', () => {
      expect(DeleteAddress).toBeTruthy();
    });
  });
});
