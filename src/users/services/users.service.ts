import { RESTDataSource } from "apollo-datasource-rest";

export class UsersService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUserById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }

  async getToken(email: string, password: string) {
    return await this.post(this.baseURL, {email, password});
  }
}