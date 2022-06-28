import { Injectable } from '@nestjs/common';
import { RESTDataSource } from "apollo-datasource-rest";

@Injectable()
export class GenresService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  getAllGenres(limit: number, offset: number) {
    return this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  getGenreById(id: string) {
    return this.get(`${this.baseURL}${id}`);
  }
}