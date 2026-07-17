export interface IUser {
  name: string;
  email: string;
  total: number;
}
export interface ProfileState {
  user: any;
  userForm: IUser;
  isTrue:boolean;
  saveUser: (user: IUser) => void;
  saveTrue: (check:boolean) => void;
}
