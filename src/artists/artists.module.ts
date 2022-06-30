import { Module } from '@nestjs/common';

import {ArtistsResolver} from "./resolvers/artists.resolver";

@Module({
  imports: [ArtistsResolver],
  providers: [ArtistsResolver],
  exports: [ArtistsResolver]
})
export class ArtistsModule {}
