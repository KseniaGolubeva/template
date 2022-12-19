import { Artist } from "../../types/Music";
import PopularTags from "./PopularTags";

function HotMusic(props: {artist: Artist}) {
  return (
    <article className="hot-music">
      <a className="link hot-music__link" href={props.artist.url}>
        <img className="hot-music__img" src={props.artist.image[3]["#text"]} />   
        <h3 className="hot-music__title">{props.artist.name}</h3>
      </a>
      <PopularTags tags={props.artist.tags}/>
    </article>
  );
}

export default HotMusic
