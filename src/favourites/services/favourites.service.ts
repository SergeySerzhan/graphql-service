import { RESTDataSource } from 'apollo-datasource-rest';

import { IFavorite } from '../../interfaces/IFavourite';
import { FavouriteType } from "../../graphql";

export class FavouritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  async getFavourites(token: string): Promise<IFavorite> {
    return await this.get(
      this.baseURL,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  async addToFavourites(
    token: string,
    input: { type: FavouriteType; id: string },
  ): Promise<IFavorite> {
    return await this.put(
      `${this.baseURL}add`,
      { ...input },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
}
