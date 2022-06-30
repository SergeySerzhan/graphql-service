import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Favourites')
export class FavouritesResolver {
  @Query()
  async favourites(@Args('userId') userId: string, @Context('dataSources') { FavouritesAPI }) {
    return await FavouritesAPI.getFavourites(userId);
  }

  @ResolveField()
  async id(@Parent() favourite) {
    return favourite._id;
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() favourite, @Context('dataSources') { BandsAPI }) {
    const { bandsIds } = favourite;
    return await Promise.all(bandsIds.map(id => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() favourite, @Context('dataSources') { GenresAPI }) {
    const { genresIds } = favourite;
    return await Promise.all(genresIds.map(id => GenresAPI.getGenreById(id)));
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() favourite, @Context('dataSources') { ArtistsAPI }) {
    const { artistsIds } = favourite;
    return await Promise.all(artistsIds.map(id => ArtistsAPI.getArtistById(id)));
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() favourite, @Context('dataSources') { TracksAPI }) {
    const { tracksIds } = favourite;
    return await Promise.all(tracksIds.map(id => TracksAPI.getTrackById(id)));
  }
}
