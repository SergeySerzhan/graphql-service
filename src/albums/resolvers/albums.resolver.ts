import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Album')
export class AlbumsResolver {
  @Query()
  async albums(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') {AlbumsAPI},
  ) {
    return (await AlbumsAPI.getAllAlbums(limit, offset)).items;
  }

  @Query()
  async album(@Args('id') id: string, @Context('dataSources') { AlbumsAPI }) {
    return await AlbumsAPI.getAlbumById(id);
  }

  @ResolveField()
  async id(@Parent() album) {
    return album._id;
  }

  @ResolveField()
  async artists(@Parent() album, @Context('dataSources') { ArtistsAPI }) {
    const { artistsIds } = album;
    return await Promise.allSettled(
      artistsIds.map((id) => ArtistsAPI.getArtistById(id)),
    );
  }

  @ResolveField()
  async bands(@Parent() album, @Context('dataSources') { BandsAPI }) {
    const { bandsIds } = album;
    return await Promise.allSettled(
      bandsIds.map((id) => BandsAPI.getBandById(id)),
    );

  }

  @ResolveField()
  async tracks(@Parent() album, @Context('dataSources') { TracksAPI }) {
    const { tracksIds } = album;
    return await Promise.allSettled(
      tracksIds.map((id) => TracksAPI.getTrackById(id)),
    );
  }

  @ResolveField()
  async genres(@Parent() album, @Context('dataSources') { GenresAPI }) {
    const { genresIds } = album;
    return await Promise.allSettled(
      genresIds.map((id) => GenresAPI.getGenreById(id)),
    );
  }
}
