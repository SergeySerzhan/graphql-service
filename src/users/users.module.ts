import { Module } from '@nestjs/common';

import { UsersResolver } from './resolvers/users.resolver';

@Module({
  imports: [UsersResolver],
  providers: [UsersResolver],
  exports: [UsersResolver],
})
export class UsersModule {}
