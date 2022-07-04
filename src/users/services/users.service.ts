import { RESTDataSource } from 'apollo-datasource-rest';
import { IUser } from '../../interfaces/IUser';
import { UserInput } from '../../graphql';

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

  async register(input: UserInput): Promise<IUser> {
    return await this.post(`${this.baseURL}register`, { ...input });
  }

  async verify(token: string): Promise<IUser> {
    return await this.post(
      `${this.baseURL}verify`,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
}
