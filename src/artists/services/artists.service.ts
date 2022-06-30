import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getAllArtists(limit: number, offset: number) {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getArtistById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }

  async createArtist(
    token: string,
    firstName: string,
    secondName: string,
    country: string,
    middleName: string | null = null,
    birthDate: string | null = null,
    birthPlace: string | null = null,
    bandsIds: string[],
    instruments: string[],
  ) {
    return await this.post(
      `${this.baseURL}`,
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
  }

  async deleteArtist(token: string, id: string) {
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
    firstName: string,
    secondName: string,
    country: string,
    middleName: string | null = null,
    birthDate: string | null = null,
    birthPlace: string | null = null,
    bandsIds: string[],
    instruments: string[],
  );
}
