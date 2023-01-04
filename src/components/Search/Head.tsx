import { useContext } from "react";
import HeadNav from "./HeadNav";
import { NameTrackContext } from "./Search";

function Head() {
  const contex = useContext(NameTrackContext);

  return (
    <div className="main__head">
      <h1 className="main__title title-left">Search results for "{contex.nameTrack}"</h1>
      <HeadNav links=
        {
          [
            { link: '#', title: 'Top Results' },
            { link: '#', title: 'Artists' },
            { link: '#', title: 'Albums' },
            { link: '#', title: 'Tracks' }
          ]
        }
      />
    </div>
  );
}

export default Head;
