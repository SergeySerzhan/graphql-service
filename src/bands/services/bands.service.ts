import { Injectable } from '@nestjs/common';
import { RESTDataSource } from "apollo-datasource-rest";

@Injectable()
export class BandsService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  getAllBands(limit: number, offset: number) {
    return this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  getBandById(id: string) {
    return this.get(`${this.baseURL}${id}`);
  }
}