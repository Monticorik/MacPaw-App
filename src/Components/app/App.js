import AppHeader from '../appHeader/AppHeader';
// import BreedsPage from '../pages/breedsPage/BreedsPage';
// import GaleryPage from '../pages/galeryPage/GaleryPage';
// import LikePage from '../pages/likePage/LikePage';
// import FavouritePage from '../pages/favouritePage/FavouritePage';
// import DislikePage from '../pages/dislikePage/DislikePage';
// import BreedsInfoPage from '../pages/breedsInfoPage/BreedsInfoPage';
import VotingPage from '../pages/votingPage/VotingPage';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
        <div className='left_side'>
            <AppHeader/>
        </div>
        <div className='right_side'>
          <main>
            <VotingPage/>
          </main>
        </div>
    </div>
  );
}

export default App;