import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import {
  Artist,
  Band,
  Favourites,
  FavouriteType,
  Genre,
  Track,
} from '../../graphql';
import { ICustomRequest } from '../../interfaces/ICustomRequest';

@Resolver('Favourites')
export class FavouritesResolver {
  @Query()
  async favourites(
    @Context('token') token: string,
    @Context('dataSources') { FavouritesAPI },
    @Context('dataSources') { UsersAPI },
    @Context('req') req: ICustomRequest,
  ): Promise<Favourites> {
    req.user = await UsersAPI.verify(token);
    return await FavouritesAPI.getFavourites(token);
  }

  @Mutation()
  async addTrackToFavourites(
    @Args('id') id: string,
    @Context('dataSources') { FavouritesAPI },
    @Context('dataSources') { UsersAPI },
    @Context('token') token: string,
    @Context('req') req: ICustomRequest,
  ): Promise<Favourites> {
    req.user = await UsersAPI.verify(token);
    return await FavouritesAPI.addToFavourites(token, {
      type: FavouriteType.tracks,
      id,
    });
  }

  @Mutation()
  async addBandToFavourites(
    @Args('id') id: string,
    @Context('dataSources') { FavouritesAPI },
    @Context('dataSources') { UsersAPI },
    @Context('token') token: string,
    @Context('req') req: ICustomRequest,
  ): Promise<Favourites> {
    req.user = await UsersAPI.verify(token);
    return await FavouritesAPI.addToFavourites(token, {
      type: FavouriteType.bands,
      id,
    });
  }

  @Mutation()
  async addArtistToFavourites(
    @Args('id') id: string,
    @Context('dataSources') { FavouritesAPI },
    @Context('dataSources') { UsersAPI },
    @Context('token') token: string,
    @Context('req') req: ICustomRequest,
  ): Promise<Favourites> {
    req.user = await UsersAPI.verify(token);
    return await FavouritesAPI.addToFavourites(token, {
      type: FavouriteType.artists,
      id,
    });
  }

  @Mutation()
  async addGenreToFavourites(
    @Args('id') id: string,
    @Context('dataSources') { FavouritesAPI },
    @Context('dataSources') { UsersAPI },
    @Context('token') token: string,
    @Context('req') req: ICustomRequest,
  ): Promise<Favourites> {
    req.user = await UsersAPI.verify(token);
    return await FavouritesAPI.addToFavourites(token, {
      type: FavouriteType.genres,
      id,
    });
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
