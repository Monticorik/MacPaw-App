import AppHeader from '../appHeader/AppHeader';
import Breeds from '../breeds/Breeds';
import Galery from '../galery/Galery';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
        <div className='left_side'>
            <AppHeader/>
        </div>
        <div className='right_side'>
          <main>
            <Galery/>
          </main>
        </div>
    </div>
  );
}

export default App;
