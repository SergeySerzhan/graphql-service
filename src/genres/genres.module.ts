import { Module } from '@nestjs/common';

import { GenresService } from "./services/genres.service";

@Module({
  imports: [],
  providers: [GenresService],
  exports: [GenresService]
})
export class TracksModule {}