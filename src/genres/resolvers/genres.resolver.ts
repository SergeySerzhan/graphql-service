import {
  Resolver,
  Args,
  Query,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

@Resolver('Genre')
export class GenresResolver {
  @Query()
  async genres(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { GenresAPI },
  ) {
    return (await GenresAPI.getAllGenres(limit, offset)).items;
  }

  @Query()
  async genre(@Args('id') id: string, @Context('dataSources') { GenresAPI }) {
    return await GenresAPI.getGenreById(id);
  }

  @ResolveField()
  async id(@Parent() genre) {
    return genre._id;
  }
}
