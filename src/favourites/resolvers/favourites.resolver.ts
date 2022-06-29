import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';

@Resolver('Favourite')
export class FavouritesResolver {
  @Query()
  async favourites(@Args('userId') userId: string, @Context('dataSources') { FavouritesAPI }) {
    return await FavouritesAPI.getFavourites(userId);
  }

  @ResolveField()
  async id(@Parent() favourite) {
    return favourite._id;
  }

  @ResolveField()
  async bands(@Parent() favourite) {
    return favourite.bandsIds;
  }

  @ResolveField()
  async genres(@Parent() favourite) {
    return favourite.genresIds;
  }

  @ResolveField()
  async artists(@Parent() favourite) {
    return favourite.artistIds;
  }

  @ResolveField()
  async tracks(@Parent() favourite) {
    return favourite.tracksIds;
  }
}
