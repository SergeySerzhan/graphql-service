import { RESTDataSource } from 'apollo-datasource-rest';
import { ITrack } from '../../interfaces/ITrack';
import { CreateTrackInput, DeleteInfo, UpdateTrackInput } from '../../graphql';

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

  async createTrack(token: string, input: CreateTrackInput): Promise<ITrack> {
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

  async deleteTrack(token: string, id: string): Promise<DeleteInfo> {
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

  async updateTrack(
    token: string,
    id: string,
    input: UpdateTrackInput,
  ): Promise<ITrack> {
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
