import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { Album, Band, Genre, Track } from '../../graphql';

@Resolver('Track')
export class TracksResolver {
  @Query()
  async tracks(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { TracksAPI },
  ): Promise<Track[]> {
    return (await TracksAPI.getAllTracks(limit, offset)).items;
  }

  @Query()
  async track(
    @Args('id') id: string,
    @Context('dataSources') { TracksAPI },
  ): Promise<Track> {
    return await TracksAPI.getTrackById(id);
  }

  @ResolveField()
  async id(@Parent() track): Promise<string> {
    return track._id;
  }

  @Resolver()
  @ResolveField()
  async albums(
    @Parent() track,
    @Context('dataSources') { AlbumsAPI },
  ): Promise<Album[]> {
    const { albumId } = track;
    return [await AlbumsAPI.getAlbumById(albumId)];
  }

  @Resolver()
  @ResolveField()
  async bands(
    @Parent() track,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    const { bandsIds } = track;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(
    @Parent() track,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    const { genresIds } = track;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }
}
