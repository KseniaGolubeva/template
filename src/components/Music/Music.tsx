import HotMusicSection from "./HotMusicSection";
import PopularMusicSection from "./PopularMusicSection";

function Music() {
  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="main__title title-center">Music</h1>
        <HotMusicSection />

        <PopularMusicSection />
      </div>
    </main>
  );
}

export default Music;
