import { RESTDataSource } from 'apollo-datasource-rest';
import { ITrack } from '../../interfaces/ITrack';

export class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getAllTracks(limit: number, offset: number): Promise<ITrack[]> {
    return await this.get(this.baseURL, {
      limit: limit,
      offset: offset,
    });
  }

  async getTrackById(id: string): Promise<ITrack> {
    return await this.get(`${this.baseURL}${id}`);
  }
}
