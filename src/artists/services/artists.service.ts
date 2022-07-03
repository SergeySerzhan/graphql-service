import { RESTDataSource } from 'apollo-datasource-rest';
import { IArtist } from '../../interfaces/IArtist';
import { DeleteInfo } from '../../graphql';
import { CreateArtistInput } from '../dto/create-artist.dto';

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

  async createArtist(token: string, input: CreateArtistInput) {
    console.log(input);
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

  // async updateArtist(
  //   token: string,
  //   firstName: string,
  //   secondName: string,
  //   country: string,
  //   middleName: string | null = null,
  //   birthDate: string | null = null,
  //   birthPlace: string | null = null,
  //   bandsIds: string[],
  //   instruments: string[],
  // );
}
