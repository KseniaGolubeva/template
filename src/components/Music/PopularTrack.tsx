import { Track } from "../../types/Music";
import PopularTags from "./PopularTags";

function PopularTrack(props: { track: Track }) {
  return (
    <article className="popular-music">
      <img className="popular-music__img" src={props.track.image[1]['#text']} />
      <div className="popular-music__body">
        <a className="link popular-music__link" href={props.track.url}>
          <h3 className="popular-music__title">{props.track.name}</h3>
        </a>
        <a className="link popular-music__link" href={props.track.artist.url}>
          <h4 className="popular-music__author">{props.track.artist.name}</h4>
        </a>
        <PopularTags tags={props.track.tags} />
      </div>
    </article>
  );
}

export default PopularTrack;