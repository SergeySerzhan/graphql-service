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
    @Context('dataSources') { AlbumsAPI },
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

  @Resolver()
  @ResolveField()
  async artists(@Parent() album, @Context('dataSources') { ArtistsAPI }) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map((id) => ArtistsAPI.getArtistById(id)),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() album, @Context('dataSources') { BandsAPI }) {
    const { bandsIds } = album;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() album, @Context('dataSources') { TracksAPI }) {
    const { trackIds } = album;
    return await Promise.all(trackIds.map((id) => TracksAPI.getTrackById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() album, @Context('dataSources') { GenresAPI }) {
    const { genresIds } = album;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }
}
