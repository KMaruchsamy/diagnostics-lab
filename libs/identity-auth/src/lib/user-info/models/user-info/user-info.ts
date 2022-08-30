export interface IUserInfo {
  userId: string;
  userName?: string;
  email?: string;
  address: IAddress[];
}

export interface IAddress {
  userId: string;
  addressId: string;
  city: string;
  state: string;
  pinCode: number;
  isDefault: boolean;
}
