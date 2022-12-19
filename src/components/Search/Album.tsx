import { FetchAlbum } from "../../types/Search";

function Album(props: { album: FetchAlbum }) {
  const path = props.album.image[3]['#text']
    ? props.album.image[3]['#text']
    : '/img/track.png';

  return (
    <a className="link" href={props.album.url}>
      <article className="about-music">
        <img className="about-music__img" src={path} alt="Preview" />
          <h3 className="about-music__title">{props.album.name}</h3>
          <span className="about-music__description">{props.album.artist}</span>
      </article>
    </a>
  );
}

export default Album;
