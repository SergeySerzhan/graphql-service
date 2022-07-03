import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
  Mutation,
} from '@nestjs/graphql';
import { Artist, Band, DeleteInfo } from '../../graphql';
import { CreateArtistInput } from '../dto/create-artist.dto';

@Resolver('Artist')
export class ArtistsResolver {
  @Query()
  async artists(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { ArtistsAPI },
  ): Promise<Artist[]> {
    return (await ArtistsAPI.getAllArtists(limit, offset)).items;
  }

  @Query()
  async artist(
    @Args('id') id: string,
    @Context('dataSources') { ArtistsAPI },
  ): Promise<Artist> {
    return await ArtistsAPI.getArtistById(id);
  }

  @Mutation()
  async createArtist(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context('dataSources') { ArtistsAPI },
    @Context('token') token: string,
  ): Promise<Artist> {
    console.log(createArtistInput);
    return await ArtistsAPI.createArtist(token, createArtistInput);
  }

  @Mutation()
  async deleteArtist(
    @Args('id') id: string,
    @Context('dataSources') { ArtistsAPI },
    @Context('token') token: string,
  ): Promise<DeleteInfo> {
    return await ArtistsAPI.deleteArtist(token, id);
  }

  @ResolveField()
  async id(@Parent() artist): Promise<string> {
    return artist._id;
  }

  @Resolver()
  @ResolveField()
  async bands(
    @Parent() artist,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    const { bandsIds } = artist;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @ResolveField()
  async instruments(@Parent() artist): Promise<string> {
    return artist.instruments.join(', ');
  }
}
