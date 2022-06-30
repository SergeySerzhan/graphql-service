import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
  Mutation,
} from '@nestjs/graphql';

@Resolver('Artist')
export class ArtistsResolver {
  @Query()
  async artists(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Context('dataSources') { ArtistsAPI },
  ) {
    return (await ArtistsAPI.getAllArtists(limit, offset)).items;
  }

  @Query()
  async artist(@Args('id') id: string, @Context('dataSources') { ArtistsAPI }) {
    return await ArtistsAPI.getArtistById(id);
  }

  @Mutation()
  async createArtist(
    @Args('firstName') firstName: string,
    @Args('secondName') secondName: string,
    @Args('country') country: string,
    @Args('middleName') middleName: string,
    @Args('birthDate') birthDate: string,
    @Args('birthPlace') birthPlace: string,
    @Args('bandsIds') bandsIds: string[],
    @Args('instruments') instruments: string[],
    @Context('dataSources') { ArtistsAPI },
    @Context('token') token: string,
  ) {
    return await ArtistsAPI.createArtist(
      token,
      firstName,
      secondName,
      country,
      middleName,
      birthDate,
      birthPlace,
      bandsIds,
      instruments,
    );
  }

  @ResolveField()
  async id(@Parent() artist) {
    return artist._id;
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist, @Context('dataSources') { BandsAPI }) {
    const { bandsIds } = artist;
    return await Promise.all(bandsIds.map((id) => BandsAPI.getBandById(id)));
  }

  @ResolveField()
  async instruments(@Parent() artist) {
    return artist.instruments.join(', ');
  }
}
