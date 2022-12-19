import { createContext } from "react";
import { useParams } from "react-router-dom";
import Aside from "./Aside";
import Body from "./Body";
import Head from "./Head";

export const NameTrackContext = createContext<{ apiKey: string; nameTrack: string }>({
  apiKey: '',
  nameTrack: ''
});

function Search() {
  const { nameTrack } = useParams();

  return (
    <main className="main">
      <div className="wrapper">
        <NameTrackContext.Provider value={{apiKey:'', nameTrack: nameTrack || ''}}>
          <Head />
        </NameTrackContext.Provider>
      </div>
      <div className="main__body">
        <div className="main__boby-content">
          <NameTrackContext.Provider value={{apiKey: '0062ed30cbe67e2d2784de3614cfc7b1', nameTrack: nameTrack || ''}}>
            <Body />
          </NameTrackContext.Provider>

          <Aside />
        </div>
      </div>
    </main >
  );
}

export default Search;
