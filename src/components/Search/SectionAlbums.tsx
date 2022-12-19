import React from "react";
import { FetchAlbum } from "../../types/Search";
import Album from "./Album";
import { NameTrackContext } from "./Search";

class SectionAlbums extends React.Component<
  {},
  { albums: FetchAlbum[] }> {

  constructor(props: { }) {
    super(props);
    SectionAlbums.contextType = NameTrackContext;
    this.state = { albums: [] };
  }

  async fetchAlbums(name: string): Promise<FetchAlbum[]> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${name}&api_key=${this.context.apiKey}&format=json&limit=8`;
    const response = await fetch(url);
    const albumsJson = await response.json();
    return albumsJson['results']['albummatches']['album'];
  }

  async componentDidMount() {
    const albums = await this.fetchAlbums(this.context.nameTrack);
    this.setState({ albums: albums });
  }

  render() {
    return (
      <section className="section">
        <h2 className="section__title-left">Альбомы</h2>
        <div className="section__body">
          {
            this.state.albums.map(album => {
              return <Album key={`${album.name} ${album.artist}`} album={album} />
            })
          }
        </div>
        <a className="link-more" href="#">
          More albums &gt;
        </a>
      </section>
    );
  }

}

export default SectionAlbums;