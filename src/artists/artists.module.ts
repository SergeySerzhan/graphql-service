import { Module } from '@nestjs/common';

import { ArtistsService } from "./services/artists.service";

@Module({
  imports: [],
  providers: [ArtistsService],
  exports: [ArtistsService]
})
export class ArtistsModule {}