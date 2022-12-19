import { FetchArtist } from "../../types/Search";

function Artist(props: { artist: FetchArtist }) {
  const path = props.artist.image[3]['#text']
    ? props.artist.image[3]['#text']
    : '/img/star.jpg';

  return (
    <a className="link" href={props.artist.url}>
      <article className="about-music">
        <img className="about-music__img" src={path} alt="Preview" />
          <h3 className="about-music__title">{props.artist.name}</h3>
          <span className="about-music__description">listeners {props.artist.listeners}</span>
      </article>
    </a>
  );
}

export default Artist;
