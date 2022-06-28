import { RESTDataSource } from "apollo-datasource-rest";

export class AlbumsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAllAlbums(limit: number, offset: number) {
    return await this.get(this.baseURL, {
        limit: limit,
        offset: offset
    });
  }

  async getAlbumById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }
}
