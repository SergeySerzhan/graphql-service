import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';

import { AlbumsModule } from "./albums/albums.module";
import { ArtistsModule } from "./artists/artists.module";
import { BandsModule } from "./bands/bands.module";
import { TracksModule } from "./tracks/tracks.module";

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./*/**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
      outputAs: 'class',
    },
    }
  ), AlbumsModule, ArtistsModule, BandsModule, TracksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
