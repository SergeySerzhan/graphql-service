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
  Album, Artist,
  Band,
  CreateTrackInput,
  DeleteInfo,
  Genre,
  Track,
  UpdateTrackInput,
} from '../../graphql';

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

  @Mutation()
  async createTrack(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context('dataSources') { TracksAPI },
    @Context('token') token: string,
  ): Promise<Track> {
    return await TracksAPI.createTrack(token, createTrackInput);
  }

  @Mutation()
  async deleteTrack(
    @Args('id') id: string,
    @Context('dataSources') { TracksAPI },
    @Context('token') token: string,
  ): Promise<DeleteInfo> {
    return await TracksAPI.deleteTrack(token, id);
  }

  @Mutation()
  async updateTrack(
    @Args('id') id: string,
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context('dataSources') { TracksAPI },
    @Context('token') token: string,
  ): Promise<Track> {
    return await TracksAPI.updateTrack(token, id, updateTrackInput);
  }

  @ResolveField()
  async id(@Parent() track): Promise<string> {
    return track._id;
  }

  @Resolver()
  @ResolveField()
  async album(
    @Parent() track,
    @Context('dataSources') { AlbumsAPI },
  ): Promise<Album> {
    const { albumId } = track;
    if (!albumId) return null;
    return await AlbumsAPI.getAlbumById(albumId);
  }

  @Resolver()
  @ResolveField()
  async artists(
      @Parent() track,
      @Context('dataSources') {ArtistsAPI}
  ): Promise<Artist[]> {
    const { artistsIds } = track;
    return await Promise.all(artistsIds.map(id => ArtistsAPI.getArtistById(id)));
  }

  @Resolver()
  @ResolveField()
  async bands(
    @Parent() track,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    const { bandsIds } = track;
    console.log(bandsIds);
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
