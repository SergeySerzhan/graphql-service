import { IUser } from './IUser';

export interface ICustomRequest extends Request {
  user: IUser;
}
