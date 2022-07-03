import { RESTDataSource } from 'apollo-datasource-rest';
import { IGenre } from '../../interfaces/IGenre';

export class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getAllGenres(limit: number, offset: number): Promise<IGenre[]> {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getGenreById(id: string): Promise<IGenre> {
    return await this.get(`${this.baseURL}${id}`);
  }
}
