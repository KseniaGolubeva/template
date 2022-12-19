export type FetchTrack = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: ArtistTrack;
  image: Image[];
}

export type Track = {
  tags: Tag[];
} & FetchTrack;

export type ArtistTrack = {
  name: string;
  mbid: string;
  url: string;
};

export type FetchArtist = {
  playcount: string;
  listeners: string;
  streamable: string;
  image: Image[];
} & ArtistTrack;

export type Artist = {
  tags: Tag[];
} & FetchArtist;

export type Streamable = {
  '#text': string;
  fulltrack: string;
};

export type Image = {
  '#text': string;
  size: string;
};

export type Tag = {
  name: string;
  count: string;
  url: string;
};