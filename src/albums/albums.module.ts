import { Module } from '@nestjs/common';

import { AlbumsResolver } from './resolvers/albums.resolver';

@Module({
  imports: [AlbumsResolver],
  providers: [AlbumsResolver],
  exports: [AlbumsResolver],
})
export class AlbumsModule {}
