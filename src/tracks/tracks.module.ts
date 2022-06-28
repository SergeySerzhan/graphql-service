import { Module } from '@nestjs/common';
import { TracksService } from "./services/tracks.service";

@Module({
  imports: [],
  providers: [TracksService],
  exports: [TracksService]
})
export class TracksModule {}