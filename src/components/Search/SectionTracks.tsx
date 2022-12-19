import React from "react";
import { FetchTrack, TrackInfo } from "../../types/Search";
import { NameTrackContext } from "./Search";
import Track from "./Track";

class SectionTracks extends React.Component<
  {},
  { tracks: TrackInfo[] }> {

  constructor(props: {}) {
    super(props);
    SectionTracks.contextType = NameTrackContext;
    this.state = { tracks: [] };
  }

  async feachTracks(name: string): Promise<FetchTrack[]> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${this.context.apiKey}&format=json&limit=10`;
    const response = await fetch(url);
    const tracksJson = await response.json();
    return tracksJson['results']['trackmatches']['track'];
  }

  async addInfoTracks(tracks: FetchTrack[]): Promise<TrackInfo[]> {
    const tracksInfo: TrackInfo[] = [];

    for (const track of tracks) {
      const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${this.context.apiKey}&artist=${track.artist}&track=${track.name}&format=json`;
      const response = await fetch(url);
      const trackWithInfoJson = await response.json();
      tracksInfo.push(trackWithInfoJson['track'] as TrackInfo);
    }

    return tracksInfo;
  }

  async componentDidMount() {
    const tracks = await this.feachTracks(this.context.nameTrack);
    const tracksInfo = await this.addInfoTracks(tracks);
    this.setState({ tracks: tracksInfo });
  }

  render() {
    return (
      <section className="section" >
        <h2 className="section__title-left">Треки</h2>
        <div className="section__body">
          {
            this.state.tracks.map(track => {
              if (track) {
                return <Track key={`${track.name} ${track.artist.name}`} track={track} />
              }
            })
          }
        </div>
        <a className="link-more" href="#">
          More tracks &gt;
        </a>
      </section>
    );
  }

}

export default SectionTracks;