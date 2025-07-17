import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internalmarks from './components/Internalmarks';
import Viewall from './components/Viewall';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/internalmarks' element={<Internalmarks/>}/>
        <Route path='/viewall' element={<Viewall/>}/>
        <Route path='/' element={<Login/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
