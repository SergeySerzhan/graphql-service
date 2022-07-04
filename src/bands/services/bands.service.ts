import { RESTDataSource } from 'apollo-datasource-rest';
import { IBand } from '../../interfaces/IBand';
import { CreateBandInput, DeleteInfo, UpdateBandInput } from '../../graphql';

export class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getAllBands(limit: number, offset: number): Promise<IBand[]> {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getBandById(id: string): Promise<IBand> {
    return await this.get(`${this.baseURL}${id}`);
  }

  async createBand(token: string, input: CreateBandInput): Promise<IBand> {
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

  async deleteBand(token: string, id: string): Promise<DeleteInfo> {
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

  async updateBand(
    token: string,
    id: string,
    input: UpdateBandInput,
  ): Promise<IBand> {
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
