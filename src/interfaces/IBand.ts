import { IMember } from './IMember';

export interface IBand {
  _id: string;
  name: string;
  origin: string;
  membersId: IMember[];
  website: string;
  genresIds: string[];
}
