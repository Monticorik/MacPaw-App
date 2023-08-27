import AppHeader from '../appHeader/AppHeader';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AppBanner,
        BreedInfoPage, 
        BreedPage, 
        DislikesPage, 
        FavouritesPage, 
        GaleryPage,
        Page404,
        LikesPage,
        SearchPage, 
        VotingPage} from "../pages";

import '../../style/style.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <AppHeader/>
        <Routes>
            <Route path="/" element={<AppBanner/>} />
            <Route path="/voting" element={<VotingPage/>} />
            <Route path="/breed" element={<BreedPage/>} />
            <Route path="/breed/:breedId" element={<BreedInfoPage/>} />
            <Route path="/galery" element={<GaleryPage/>} />
            <Route path="/likes" element={<LikesPage/>} />
            <Route path="/favourites" element={<FavouritesPage/>} />
            <Route path="/dislikes" element={<DislikesPage/>} />
            <Route path="/search/:searchValue" element={<SearchPage/>} />
            <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;