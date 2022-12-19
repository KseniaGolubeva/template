import ControlItems from "./ControlItems";
import ControlPreview from "./ControlPreview";

function Controls() {
  const svgArrowLeft = <svg id="svgArrowLeft" className="controls__button-img bi bi-arrow-bar-left" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
  </svg>;

  const svgPause = <svg id="svgPause" className="controls__button-img bi bi-pause-circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
  </svg>;

  const svgArrowRight = <svg id="svgArrowRight" className="controls__button-img bi bi-arrow-bar-right" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
  </svg>;

  const svgHeart = <svg id="svgHeart" className="controls__button-img bi bi-heart" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
  </svg>;

  return (
    <div className="controls">
      <ControlPreview />

      <div className="controls__info" />

      <ul className="controls__item-wrapper">
        <ControlItems svgItems=
          {
            [
              svgArrowLeft, svgPause, svgArrowRight, svgHeart
            ]
          } />
      </ul>
    </div>
  );
}

export default Controls;
