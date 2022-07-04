import { Module } from '@nestjs/common';

import { TracksResolver } from './resolvers/tracks.resolver';

@Module({
  imports: [TracksResolver],
  providers: [TracksResolver],
  exports: [TracksResolver],
})
export class TracksModule {}
