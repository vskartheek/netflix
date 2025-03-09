import { useContext } from 'react';
import './app.scss';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import {AuthContext} from './authContext/AuthContext';
function App() {
  const {user}=useContext(AuthContext);
  return (
    <Router>
    <Routes>
      <Route exact path="/register" element={!user?<Register />:<Home/>}/>
      <Route exact path="/" element={user?<Home />:<Register/>}/>
      <Route  exact path="/login" element={<Login/>}/>
      
    { user &&(
      <>
          <Route path="/movies" element={<Home type="movies" />}/>
          <Route path="/series" element={<Home type="series" />}/>
          <Route path="/watch" element={<Watch/>}/>
      </>
            )
    }
    </Routes>
  </Router>
  );
}

export default App;
