import { Injectable } from '@nestjs/common';
import { RESTDataSource } from "apollo-datasource-rest";

@Injectable()
export class AlbumsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  getAllAlbums(limit: number, offset: number) {
    return this.get(this.baseURL, {
        limit: limit,
        offset: offset
    });
  }

  getAlbumById(id: string) {
    return this.get(`${this.baseURL}${id}`);
  }
}