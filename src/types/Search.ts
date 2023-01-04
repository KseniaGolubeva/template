export type FetchTrack = {
  artist: string;
  streamable: string;
  image: Image[];
} & Track;

export type Track = {
  name: string;
  mbid: string;
  url: string;
  listeners: string;
}

export type TrackInfo = {
  duration: string;
  strimable: Streamable;
  playcount: string;
  artist: ArtistTrack;
  album?: AlbumTrack;
  toptags: {
    tag: Tag[];
  }
  wiki: Wiki;
} & Track;

export type FetchAlbum = {
  name: string;
  streamable: string;
} & Album;

export type Album = {
  artist: string;
  mbid: string;
  url: string;
  image: Image[];
}

export type AlbumTrack = {
  title: string;
  '@attr': {
    position: string;
  }
}  & Album;

export type FetchArtist = {
  listeners: string;
  streamable: string;
  image: Image[];
} & ArtistTrack;

export type ArtistTrack = {
  name: string;
  mdid: string;
  url: string;
}

export type Streamable = {
  '#text': string;
  fulltrack: string;
}

export type Wiki = {
  published: string;
  summary: string;
  content: string;
}

export type Image = {
  '#text': string;
  size: string;
}

export type Tag = {
  name: string;
  url: string;
}