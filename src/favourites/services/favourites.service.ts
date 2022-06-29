import { RESTDataSource } from "apollo-datasource-rest";

export class FavouritesService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  async getFavourites(userId: string) {
    return await this.get(`${this.baseURL}${userId}`);
  }
}