import { RESTDataSource } from 'apollo-datasource-rest';

import { IAlbum } from '../../interfaces/IAlbum';
import { CreateAlbumInput, DeleteInfo, UpdateAlbumInput } from '../../graphql';

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

  async createAlbum(token: string, input: CreateAlbumInput): Promise<IAlbum> {
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

  async deleteAlbum(token: string, id: string): Promise<DeleteInfo> {
    return await this.delete(
      `${this.baseURL}${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  async updateAlbum(
    token: string,
    id: string,
    input: UpdateAlbumInput,
  ): Promise<IAlbum> {
    return await this.put(
      `${this.baseURL}${id}`,
      { ...input },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }
}
