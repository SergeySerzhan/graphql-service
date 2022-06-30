import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Band')
export class BandsResolver {
  @Query()
  async bands(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { BandsAPI },
  ) {
    return (await BandsAPI.getAllBands(limit, offset)).items;
  }

  @Query()
  async band(@Args('id') id: string, @Context('dataSources') { BandsAPI }) {
    return await BandsAPI.getBandById(id);
  }

  @ResolveField()
  async id(@Parent() band) {
    return band._id;
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() band, @Context('dataSources') { GenresAPI }) {
    const { genresIds } = band;
    return await Promise.all(genresIds.map((id) => GenresAPI.getGenreById(id)));
  }
}
