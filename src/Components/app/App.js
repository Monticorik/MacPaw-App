import AppHeader from '../appHeader/AppHeader';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AppBanner,
        BreedInfoPage, 
        BreedPage, 
        DislikesPage, 
        FavouritesPage, 
        GaleryPage, 
        LikesPage, 
        SearchPage, 
        VotingPage} from "../pages";

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='left_side'>
            <AppHeader/>
        </div>
        <div className='right_side'>
          <main>
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
                {/* <Route path="*" element={<Page404/>} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;