import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { Artist, Band, Favourites, Genre, Track } from '../../graphql';

@Resolver('Favourites')
export class FavouritesResolver {
  @Query()
  async favourites(
    @Args('userId') userId: string,
    @Context('dataSources') { FavouritesAPI },
  ): Promise<Favourites> {
    return await FavouritesAPI.getFavourites(userId);
  }

  @ResolveField()
  async id(@Parent() favourite): Promise<string> {
    return favourite._id;
  }

  @Resolver()
  @ResolveField()
  async bands(
    @Parent() favourite,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    const { bandsIds } = favourite;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(
    @Parent() favourite,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    const { genresIds } = favourite;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }

  @Resolver()
  @ResolveField()
  async artists(
    @Parent() favourite,
    @Context('dataSources') { ArtistsAPI },
  ): Promise<Artist[]> {
    const { artistsIds } = favourite;
    return await Promise.all(
      artistsIds.map((id) => ArtistsAPI.getArtistById(id)),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(
    @Parent() favourite,
    @Context('dataSources') { TracksAPI },
  ): Promise<Track[]> {
    const { tracksIds } = favourite;
    return await Promise.all(tracksIds.map((id) => TracksAPI.getTrackById(id)));
  }
}
