import { RESTDataSource } from 'apollo-datasource-rest';
import { IGenre } from '../../interfaces/IGenre';
import {CreateGenreInput, DeleteInfo, UpdateGenreInput} from '../../graphql';

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

  async createGenre(token: string, input: CreateGenreInput): Promise<IGenre> {
    return await this.post(
      this.baseURL,
      { ...input },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  async deleteGenre(token: string, id: string): Promise<DeleteInfo> {
    return await this.delete(`${this.baseURL}${id}`, {}, {
      headers: {
        Authorization: token
      }
    })
  }

  async updateGenre(token: string, id: string, input: UpdateGenreInput): Promise<IGenre> {
    return await this.put(`${this.baseURL}${id}`, {...input}, {
      headers: {
        Authorization: token
      }
    })
  }
}
