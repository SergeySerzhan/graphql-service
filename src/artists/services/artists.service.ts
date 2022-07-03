import { RESTDataSource } from 'apollo-datasource-rest';
import { IArtist } from '../../interfaces/IArtist';
import {CreateArtistInput, DeleteInfo, UpdateArtistInput} from '../../graphql';

export class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getAllArtists(limit: number, offset: number): Promise<IArtist[]> {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getArtistById(id: string): Promise<IArtist> {
    return await this.get(`${this.baseURL}${id}`);
  }

  async createArtist(
    token: string,
    input: CreateArtistInput,
  ): Promise<IArtist> {
    return await this.post(
      `${this.baseURL}`,
      { ...input },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  async deleteArtist(token: string, id: string): Promise<DeleteInfo> {
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

  async updateArtist(
    token: string,
    id: string,
    input: UpdateArtistInput,
  ): Promise<IArtist> {
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
