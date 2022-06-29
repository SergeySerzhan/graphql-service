import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Artist')
export class AlbumsResolver {
  @Query()
  async artists(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { ArtistsAPI },
  ) {
    return (await ArtistsAPI.getAllArtists(limit, offset)).items;
  }

  @Query()
  async artist(@Args('id') id: string, @Context('dataSources') { ArtistsAPI }) {
    return await ArtistsAPI.getArtistById(id);
  }

  @ResolveField()
  async id(@Parent() artist) {
    return artist._id;
  }

  @ResolveField()
  async bands(@Parent() artist) {
    return artist.bandsIds;
  }

  @ResolveField()
  async instruments(@Parent() artist) {
    return artist.instruments.join(', ');
  }
}
