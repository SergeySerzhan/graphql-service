import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Track')
export class TracksResolver {
  @Query()
  async tracks(@Args('limit') limit: number, @Args('offset') offset: number, @Context('dataSources') { TracksAPI }) {
    return (await TracksAPI.getAllTracks(limit, offset)).items;
  }

  @Query()
  async track(@Args('id') id: string, @Context('dataSources') { TracksAPI }) {
    return await TracksAPI.getTrackById(id);
  }

  @ResolveField()
  async id(@Parent() track) {
    return track._id;
  }

  @ResolveField()
  async albums(@Parent() track, @Context('dataSources') { AlbumsAPI }) {
    const { albumId } = track;
    return (await AlbumsAPI.getAlbumById(albumId)).name;
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() track, @Context('dataSources') { BandsAPI }) {
    const { bandsIds } = track;
    return await Promise.all(bandsIds.map(id => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() track, @Context('dataSources') { GenresAPI }) {
    const { genresIds } = track;
    return await Promise.all(genresIds.map(id => GenresAPI.getGenreById(id)));
  }
}
