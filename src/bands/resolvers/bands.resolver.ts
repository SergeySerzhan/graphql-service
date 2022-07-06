import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
  Mutation,
} from '@nestjs/graphql';
import {
  Band,
  CreateBandInput,
  DeleteInfo,
  Genre,
  Member,
  MemberInput,
  UpdateBandInput,
} from '../../graphql';
import { IArtist } from "../../interfaces/IArtist";

@Resolver('Band')
export class BandsResolver {
  @Query()
  async bands(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    return (await BandsAPI.getAllBands(limit, offset)).items;
  }

  @Query()
  async band(
    @Args('id') id: string,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band> {
    return await BandsAPI.getBandById(id);
  }

  @Mutation()
  async createBand(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context('dataSources') { BandsAPI },
    @Context('token') token: string,
  ): Promise<Band> {
    return await BandsAPI.createBand(token, createBandInput);
  }

  @Mutation()
  async deleteBand(
    @Args('id') id: string,
    @Context('dataSources') { BandsAPI },
    @Context('token') token: string,
  ): Promise<DeleteInfo> {
    return await BandsAPI.deleteBand(token, id);
  }

  @Mutation()
  async updateBand(
    @Args('id') id: string,
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context('dataSources') { BandsAPI },
    @Context('token') token: string,
  ): Promise<Band> {
    return await BandsAPI.updateBand(token, id, updateBandInput);
  }

  @ResolveField()
  async id(@Parent() band): Promise<string> {
    return band._id;
  }

  @Resolver()
  @ResolveField()
  async genres(
    @Parent() band,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    const { genresIds } = band;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }

  @ResolveField()
  async members(
    @Parent() band,
    @Context('dataSources') { ArtistsAPI },
  ): Promise<Member[]> {
    const { members } = band;
    return (
      await Promise.all(
        members.map((member: MemberInput) => ArtistsAPI.getArtistById(member.artist)),
      )
    ).map((artist: IArtist, i) => {
      return {
        id: members[i].artist,
        ...artist,
        instrument: members[i].instrument,
        years: members[i].years
      }
    });
  }
}
