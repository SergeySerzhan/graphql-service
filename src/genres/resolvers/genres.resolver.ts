import {
  Resolver,
  Args,
  Query,
  Context,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import {
  CreateGenreInput,
  DeleteInfo,
  Genre,
  UpdateGenreInput,
} from '../../graphql';

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

  @Mutation()
  async createGenre(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context('dataSources') { GenresAPI },
    @Context('token') token: string,
  ): Promise<Genre> {
    return await GenresAPI.createGenre(token, createGenreInput);
  }

  @Mutation()
  async deleteGenre(
    @Args('id') id: string,
    @Context('dataSources') { GenresAPI },
    @Context('token') token: string,
  ): Promise<DeleteInfo> {
    return await GenresAPI.deleteGenre(token, id);
  }

  @Mutation()
  async updateGenre(
    @Args('id') id: string,
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context('dataSources') { GenresAPI },
    @Context('token') token: string,
  ): Promise<Genre> {
    return await GenresAPI.updateGenre(token, id, updateGenreInput);
  }

  @ResolveField()
  async id(@Parent() genre): Promise<string> {
    return genre._id;
  }
}
