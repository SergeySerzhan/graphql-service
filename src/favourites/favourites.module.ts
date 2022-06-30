import { Module } from '@nestjs/common';

import {FavouritesResolver} from "./resolvers/favourites.resolver";

@Module({
  imports: [FavouritesResolver],
  providers: [FavouritesResolver],
  exports: [FavouritesResolver]
})
export class FavouritesModule {}
