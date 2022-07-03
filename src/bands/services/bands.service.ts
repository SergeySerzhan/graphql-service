import { RESTDataSource } from 'apollo-datasource-rest';
import { IBand } from '../../interfaces/IBand';

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
}
