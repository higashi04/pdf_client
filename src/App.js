import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
//pages
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
import Brothers from './pages/Brothers/Brothers';
import SeeBrothers from './pages/SeeBrothers/SeeBrothers';
import Acomodadores from './pages/programaAcomodadores/Acomodadores';
import RolSemanalAcomodadores from './pages/RolSemanalAcomodadores/RolSemanalAcomodadores';

import Navibar from './components/Navibar/Navibar';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <div>
          <Routes>
            <Route path='/' element={<Navibar/>} >
              <Route index element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/user' element={<User/>} />
              <Route path='/altaHermanos' element={<Brothers/>} />
              <Route path='/consultarHermanos' element={<SeeBrothers/>} />
              <Route path='/acomodadores' element={<Acomodadores/>} />
              <Route path='/acomodadores/:rolId' element={<RolSemanalAcomodadores/>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
