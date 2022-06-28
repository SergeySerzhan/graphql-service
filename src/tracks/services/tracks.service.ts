import { Injectable } from '@nestjs/common';
import { RESTDataSource } from "apollo-datasource-rest";

@Injectable()
export class TracksService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  getAllTracks(limit: number, offset: number) {
    return this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  getTrackById(id: string) {
    return this.get(`${this.baseURL}${id}`);
  }
}