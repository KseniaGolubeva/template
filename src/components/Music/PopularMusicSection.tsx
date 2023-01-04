import React from "react";
import { FetchTrack, Track } from "../../types/Music";
import PopularTrack from "./PopularTrack";

class PopularMusicSection extends React.Component<{}, { popularMusic: Track[] }> {
  private apiKey = '0062ed30cbe67e2d2784de3614cfc7b1';
  
  constructor(props: {}) {
    super(props);
    this.state = { popularMusic: [] }
  }

  async fetchTopTracks():Promise<FetchTrack[]> {
    const urlTopTracks = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${this.apiKey}&format=json&limit=18`;

    const response = await fetch(urlTopTracks);
    const tracksJson = await response.json();
    return tracksJson['tracks']['track']; 
  }

  async addTagsTracks(tracks: FetchTrack[]):Promise<Track[]> {
    const tracksWithTags:Track[] = [];
  
    for (const track of tracks) {
      const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=${this.apiKey}&format=json`;
      const response = await fetch(urlTrack);
      const tags = await response.json();
      const trackWithTag = track as Track;
      try {
        trackWithTag.tags = tags['toptags']['tag'].slice(0, 3);
      } catch {
        trackWithTag.tags = [];
      }
      
      tracksWithTags.push(trackWithTag);
    }
  
    return tracksWithTags;
  }

  async componentDidMount() {
    const topTracks = await this.fetchTopTracks();
    const tracksWithTags = await this.addTagsTracks(topTracks);
    this.setState({popularMusic: tracksWithTags});
  }

  render() {
    return (
      <section className="section">
        <h2 className="section__title">Popular tracks</h2>
        <div className="section__popular-music" >
          {
            this.state.popularMusic.map(item => {
              return <PopularTrack key={`${item.name} ${item.artist.name}`} track={item} />
            })
          }
        </div>
      </section>
    );
  }

}

export default PopularMusicSection;