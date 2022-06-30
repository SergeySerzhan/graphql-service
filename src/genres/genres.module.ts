import { Module } from '@nestjs/common';

import {GenresResolver} from "./resolvers/genres.resolver";

@Module({
  imports: [GenresResolver],
  providers: [GenresResolver],
  exports: [GenresResolver]
})
export class GenresModule {}
