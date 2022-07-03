import {
  Resolver,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { User } from '../../graphql';

@Resolver('User')
export class UsersResolver {
  @Query()
  async user(
    @Args('id') id: string,
    @Context('dataSources') { UsersAPI },
  ): Promise<User> {
    return await UsersAPI.getUserById(id);
  }

  @Query()
  async jwt(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context('dataSources') { UsersAPI },
  ): Promise<{ jwt: string }> {
    return await UsersAPI.getToken(email, password);
  }

  @ResolveField()
  async id(@Parent() user): Promise<string> {
    return user._id;
  }

  @ResolveField()
  async secondName(@Parent() user): Promise<string> {
    return user.lastName;
  }
}
