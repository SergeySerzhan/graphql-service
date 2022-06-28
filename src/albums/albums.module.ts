import { Module } from '@nestjs/common';

import { AlbumsService } from "./services/albums.service";
import { ArtistsModule } from "../artists/artists.module";
import { AlbumsResolver } from "./resolvers/albums.resolver";

@Module({
  imports: [ArtistsModule],
  providers: [AlbumsResolver, AlbumsService]
})
export class AlbumsModule {}