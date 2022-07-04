import { Module } from '@nestjs/common';

import { BandsResolver } from './resolvers/bands.resolver';

@Module({
  imports: [BandsResolver],
  providers: [BandsResolver],
  exports: [BandsResolver],
})
export class BandsModule {}
