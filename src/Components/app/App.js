import AppHeader from '../appHeader/AppHeader';
// import BreedsPage from '../breedsPage/BreedsPage';
// import GaleryPage from '../galeryPage/GaleryPage';
// import LikePage from '../likePage/LikePage';
// import FavouritePage from '../favouritePage/FavouritePage';
// import DislikePage from '../dislikePage/DislikePage';
import BreedsInfoPage from '../breedsInfoPage/BreedsInfoPage';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
        <div className='left_side'>
            <AppHeader/>
        </div>
        <div className='right_side'>
          <main>
            <BreedsInfoPage/>
          </main>
        </div>
    </div>
  );
}

export default App;