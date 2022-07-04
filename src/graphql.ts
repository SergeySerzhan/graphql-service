/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum FavouriteType {
    bands = "bands",
    genres = "genres",
    artists = "artists",
    tracks = "tracks"
}

export class CreateAlbumInput {
    name: string;
    released?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UpdateAlbumInput {
    name?: Nullable<string>;
    released?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
}

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

export class MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UpdateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
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

export class CreateTrackInput {
    title: string;
    albumId?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    artistsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UpdateTrackInput {
    title?: Nullable<string>;
    albumId?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    artistsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UserInput {
    firstName: string;
    lastName: string;
    password: string;
    email?: Nullable<string>;
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

export abstract class IMutation {
    abstract createAlbum(createAlbumInput?: Nullable<CreateAlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;

    abstract deleteAlbum(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateAlbum(id: string, updateAlbumInput?: Nullable<UpdateAlbumInput>): Nullable<Album> | Promise<Nullable<Album>>;

    abstract createArtist(createArtistInput?: Nullable<CreateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateArtist(id: string, updateArtistInput?: Nullable<UpdateArtistInput>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createBand(createBandInput?: Nullable<CreateBandInput>): Nullable<Band> | Promise<Nullable<Band>>;

    abstract deleteBand(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateBand(id: string, updateBandInput?: Nullable<UpdateBandInput>): Nullable<Band> | Promise<Nullable<Band>>;

    abstract addTrackToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;

    abstract createGenre(createGenreInput?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateGenre(id: string, updateGenreInput?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract createTrack(createTrackInput?: Nullable<CreateTrackInput>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(id: string): Nullable<DeleteInfo> | Promise<Nullable<DeleteInfo>>;

    abstract updateTrack(id: string, updateTrackInput?: Nullable<UpdateTrackInput>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract register(userInput?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
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
