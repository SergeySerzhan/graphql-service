import { RESTDataSource } from 'apollo-datasource-rest';

import { IAlbum } from '../../interfaces/IAlbum';

export class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAllAlbums(limit: number, offset: number): Promise<IAlbum[]> {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getAlbumById(id: string): Promise<IAlbum> {
    return await this.get(`${this.baseURL}${id}`);
  }
}
