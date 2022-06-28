import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';

import { AlbumsService } from '../services/albums.service';
import { ArtistsService } from '../../artists/services/artists.service';
import { BandsService } from '../../bands/services/bands.service';
import { TracksService } from '../../tracks/services/tracks.service';
import { GenresService } from "../../genres/services/genres.service";

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private bandsService: BandsService,
    private tracksService: TracksService,
    private genresService: GenresService
  ) {}

  @Query()
  async albums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return await this.albumsService.getAllAlbums(limit, offset);
  }

  @Query()
  async album(@Args('id') id: string) {
    return await this.albumsService.getAlbumById(id);
  }

  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.allSettled(
      artistsIds.map((id) => this.artistsService.getArtistById(id)),
    );
  }

  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.allSettled(
      bandsIds.map((id) => this.bandsService.getBandById(id)),
    );
  }

  @ResolveField()
  async tracks(@Parent() album) {
    const { tracksIds } = album;
    return await Promise.allSettled(
      tracksIds.map((id) => this.tracksService.getTrackById(id)),
    );
  }

  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.allSettled(
      genresIds.map(id => this.genresService.getGenreById(id)),
    );
  }
}
