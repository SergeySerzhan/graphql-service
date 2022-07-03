import { RESTDataSource } from 'apollo-datasource-rest';
import { IUser } from '../../interfaces/IUser';

export class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.get(`${this.baseURL}${id}`);
  }

  async getToken(email: string, password: string): Promise<{ jwt: string }> {
    return (await this.post(`${this.baseURL}login`, { email, password })).jwt;
  }
}
