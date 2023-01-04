import { TrackInfo } from "../../types/Search";

function Track(props: { track: TrackInfo }) {
  const path = props.track.album !== undefined && props.track.album.image[0]['#text'] !== ''
    ? props.track.album.image[0]['#text']
    : '/img/note.png';

  function getTime(duration: number) {
    const durationSeconds = duration / 1000;

    let seconds = (durationSeconds % 60).toString();
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }
    const time = `${Math.trunc(durationSeconds / 60)}:${seconds}`;
    if (time !== '0:00') {
      return time;
    } else {
      return '';
    }
  }

  return (
    <li className="list-track__item">
      <div className="list-track__content">
        <a className="list-track__img" href="#">
          <svg className="svg-track-img bi bi-play-circle" xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%"
            fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
        </a>
        <img className="list-track__img" src={path} alt="Preview" />
        <a className="list-track__img" href="#">
          <svg className="svg-track-img list-track__like bi bi-heart" xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%"
            fill="currentColor" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </a>
        <h3 className="list-track__music-name"><a className="link" href={props.track.url}>{props.track.name}</a></h3>
      </div>
      <span className="list-track__author"><a className="link" href={props.track.artist.url}>{props.track.artist.name}</a></span>
      <time className="list-track__time">{getTime(+props.track.duration)}</time>
    </li>
  );
}

export default Track;
