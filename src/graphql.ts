
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArtistInput {
    firstName: string;
    secondName: string;
    country: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    country?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<string>;
}

export class UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<string>;
}

export class Album {
    id?: Nullable<string>;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export abstract class IQuery {
    abstract albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;

    abstract album(id: string): Nullable<Album> | Promise<Nullable<Album>>;

    abstract artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract favourites(userId: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;

    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract jwt(email: string, password: string): Nullable<string> | Promise<Nullable<string>>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<string>;
}

export class DeleteInfo {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export abstract class IMutation {
    abstract createArtist(createArtistInput?: Nullable<CreateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateArtist(id: string, updateArtistInput?: Nullable<UpdateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createGenre(createGenreInput?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateGenre(id: string, updateGenreInput?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class Favourites {
    id: string;
    userId: string;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Track {
    id: string;
    title?: Nullable<string>;
    albums?: Nullable<Nullable<Album>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
