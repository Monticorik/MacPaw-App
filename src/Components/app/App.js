import AppHeader from '../appHeader/AppHeader';
import AppNav from '../appNav/AppNav';
import Banner from '../appBanner/Banner';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
        <div className='left_side'>
            <AppHeader/>
            <AppNav/>
        </div>
        <div className='right_side'>
            <Banner/>
        </div>
    </div>
  );
}

export default App;
