
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logobar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
