import {
  Resolver,
  Args,
  Query,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Genre } from '../../graphql';

@Resolver('Genre')
export class GenresResolver {
  @Query()
  async genres(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    return (await GenresAPI.getAllGenres(limit, offset)).items;
  }

  @Query()
  async genre(
    @Args('id') id: string,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre> {
    return await GenresAPI.getGenreById(id);
  }

  @ResolveField()
  async id(@Parent() genre): Promise<string> {
    return genre._id;
  }
}
