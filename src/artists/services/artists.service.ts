import { RESTDataSource } from "apollo-datasource-rest";

export class ArtistsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getAllArtists(limit: number, offset: number) {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  async getArtistById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }
}
