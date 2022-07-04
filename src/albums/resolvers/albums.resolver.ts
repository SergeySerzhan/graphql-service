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
  Album,
  Artist,
  Band,
  CreateAlbumInput,
  DeleteInfo,
  Genre,
  Track,
  UpdateAlbumInput,
} from '../../graphql';

@Resolver('Album')
export class AlbumsResolver {
  @Query()
  async albums(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { AlbumsAPI },
  ): Promise<Album[]> {
    return (await AlbumsAPI.getAllAlbums(limit, offset)).items;
  }

  @Query()
  async album(
    @Args('id') id: string,
    @Context('dataSources') { AlbumsAPI },
  ): Promise<Album> {
    return await AlbumsAPI.getAlbumById(id);
  }

  @Mutation()
  async createAlbum(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context('dataSources') { AlbumsAPI },
    @Context('token') token: string,
  ): Promise<Album> {
    return await AlbumsAPI.createAlbum(token, createAlbumInput);
  }

  @Mutation()
  async deleteAlbum(
    @Args('id') id: string,
    @Context('dataSources') { AlbumsAPI },
    @Context('token') token: string,
  ): Promise<DeleteInfo> {
    return await AlbumsAPI.deleteAlbum(token, id);
  }

  @Mutation()
  async updateAlbum(
    @Args('id') id: string,
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context('dataSources') { AlbumsAPI },
    @Context('token') token: string,
  ): Promise<Album> {
    return await AlbumsAPI.updateAlbum(token, id, updateAlbumInput);
  }

  @ResolveField()
  async id(@Parent() album): Promise<string> {
    return album._id;
  }

  @Resolver()
  @ResolveField()
  async artists(
    @Parent() album,
    @Context('dataSources') { ArtistsAPI },
  ): Promise<Artist[]> {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map((id) => ArtistsAPI.getArtistById(id)),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(
    @Parent() album,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    const { bandsIds } = album;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @Resolver()
  @ResolveField()
  async tracks(
    @Parent() album,
    @Context('dataSources') { TracksAPI },
  ): Promise<Track[]> {
    const { trackIds } = album;
    return await Promise.all(trackIds.map((id) => TracksAPI.getTrackById(id)));
  }

  @Resolver()
  @ResolveField()
  async genres(
    @Parent() album,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    const { genresIds } = album;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }
}
