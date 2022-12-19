import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Music from './components/Music/Music';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Music />} />
        <Route path="search/:nameTrack" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
