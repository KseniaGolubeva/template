import { useContext } from "react";
import FormSearch from "./FormSearch";
import { NameTrackContext } from "./Search";
import SectionAlbums from "./SectionAlbums";
import SectionArtists from "./SectionArtists";
import SectionTracks from "./SectionTracks";

function Body() {
  const nameTrack = useContext(NameTrackContext);

  return (

    <div className="main__content">
      <FormSearch />

      <SectionArtists />

      <SectionAlbums />

      <SectionTracks />
    </div>


  );
}

export default Body;
