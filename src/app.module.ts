import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AlbumsModule } from './albums/albums.module';
import { ArtistsModule } from './artists/artists.module';
import { BandsModule } from './bands/bands.module';
import { TracksModule } from './tracks/tracks.module';

import { AlbumsService } from './albums/services/albums.service';
import { ArtistsService } from './artists/services/artists.service';
import { BandsService } from './bands/services/bands.service';
import { GenresService } from './genres/services/genres.service';
import { TracksService } from './tracks/services/tracks.service';
import { AlbumsResolver } from './albums/resolvers/albums.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./*/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      dataSources: () => {
        return {
          AlbumsAPI: new AlbumsService(),
          ArtistsAPI: new ArtistsService(),
          BandsAPI: new BandsService(),
          GenresAPI: new GenresService(),
          TracksAPI: new TracksService(),
        };
      },
    }),
    AlbumsModule,
    ArtistsModule,
    BandsModule,
    TracksModule,
  ],
  controllers: [],
  providers: [AlbumsResolver],
})
export class AppModule {}
