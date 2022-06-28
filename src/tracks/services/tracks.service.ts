import { RESTDataSource } from "apollo-datasource-rest";

export class TracksService extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getAllTracks(limit: number, offset: number) {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset
    });
  }

  async getTrackById(id: string) {
    return await this.get(`${this.baseURL}${id}`);
  }
}
