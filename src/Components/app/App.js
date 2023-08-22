import AppHeader from '../appHeader/AppHeader';
import Breeds from '../breeds/Breeds';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
        <div className='left_side'>
            <AppHeader/>
        </div>
        <div className='right_side'>
          <main>
            <Breeds/>
          </main>
        </div>
    </div>
  );
}

export default App;
