import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { Band, Genre } from '../../graphql';

@Resolver('Band')
export class BandsResolver {
  @Query()
  async bands(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band[]> {
    return (await BandsAPI.getAllBands(limit, offset)).items;
  }

  @Query()
  async band(
    @Args('id') id: string,
    @Context('dataSources') { BandsAPI },
  ): Promise<Band> {
    return await BandsAPI.getBandById(id);
  }

  @ResolveField()
  async id(@Parent() band): Promise<string> {
    return band._id;
  }

  @Resolver()
  @ResolveField()
  async genres(
    @Parent() band,
    @Context('dataSources') { GenresAPI },
  ): Promise<Genre[]> {
    const { genresIds } = band;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }
}
