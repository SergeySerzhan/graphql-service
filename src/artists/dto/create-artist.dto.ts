import { InputType, Field } from "@nestjs/graphql";
import {IsOptional} from "class-validator";

@InputType()
export class CreateArtistInput {
  @Field()
  firstName: string;

  @Field()
  secondName: string;

  @Field()
  country: string;

  @Field()
  @IsOptional()
  middleName: string;

  @Field()
  @IsOptional()
  birthDate: string;

  @Field()
  @IsOptional()
  birthPlace: string;

  @Field()
  @IsOptional()
  bandsIds: string[];

  @Field()
  @IsOptional()
  instruments: string[];
}
