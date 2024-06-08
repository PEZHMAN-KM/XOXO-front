import {BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Login from './pages/Login';
// import Table from './pages/Table';
// import GameDesign from './pages/GameDesign';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path='/login' element={<Login/>} />
            <Route path='/scores' element={<Table/>} />
            <Route path='/play' element={<GameDesign/>} /> */}
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App
