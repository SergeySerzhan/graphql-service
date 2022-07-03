import { RESTDataSource } from 'apollo-datasource-rest';
import { IFavorite } from '../../interfaces/IFavourite';

export class FavouritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  async getFavourites(userId: string): Promise<IFavorite> {
    return await this.get(`${this.baseURL}${userId}`);
  }
}
