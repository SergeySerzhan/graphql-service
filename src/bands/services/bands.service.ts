import { RESTDataSource } from "apollo-datasource-rest";

export class BandsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getAllBands(limit: number, offset: number) {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  async getBandById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }
}
