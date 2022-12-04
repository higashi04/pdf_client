import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
//pages
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import User from './pages/User/User';
import Brothers from './pages/Brothers/Brothers';

import Navibar from './components/Navibar/Navibar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navibar/>
        <div>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/user' element={<User/>} />
            <Route path='/altaHermanos' element={<Brothers/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;