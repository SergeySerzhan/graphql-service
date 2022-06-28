import { RESTDataSource } from "apollo-datasource-rest";

export class GenresService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getAllGenres(limit: number, offset: number) {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  async getGenreById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }
}
