import { Injectable } from '@nestjs/common';
import { RESTDataSource } from "apollo-datasource-rest";

@Injectable()
export class ArtistsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  getAllArtists(limit: number, offset: number) {
    return this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  getArtistById(id: string) {
    return this.get(`${this.baseURL}${id}`);
  }
}