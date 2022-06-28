import { Module } from '@nestjs/common';

import { BandsService } from "./services/bands.service";

@Module({
  imports: [],
  providers: [BandsService],
  exports: [BandsService]
})
export class BandsModule {}