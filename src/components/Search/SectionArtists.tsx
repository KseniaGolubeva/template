import React from "react";
import { FetchArtist } from "../../types/Search";
import Artist from "./Artist";
import { NameTrackContext } from "./Search";

class SectionArtists extends React.Component<
  {},
  { artists: FetchArtist[] }> {

  constructor(props: { }) {
    super(props);
    SectionArtists.contextType = NameTrackContext;
    this.state = { artists: [] }
  }

  async fetchArtists(name: string): Promise<FetchArtist[]> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${this.context.apiKey}&format=json&limit=8`;
    const response = await fetch(url);
    const artistsJson = await response.json();
    return artistsJson['results']['artistmatches']['artist'];
  }

  async componentDidMount() {
    const artists = await this.fetchArtists(this.context.nameTrack);
    this.setState({ artists: artists });
  }

  render() {
    return (
      <section className="section">
        <h2 className="section__title-left">Artists</h2>
        <div className="section__body">
          {
            this.state.artists.map(artist => {
              return <Artist key={artist.name} artist={artist} />;
            })
          }
        </div>
        <a className="link-more" href="#">
          More artists &gt;
        </a>
      </section>
    );
  }
}

export default SectionArtists;