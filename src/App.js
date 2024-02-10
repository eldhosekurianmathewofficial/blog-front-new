import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AddPost from './components/AddPost';
import NavBar from './components/NavBar';
import ViewAll from './components/ViewAll';
import VIewMine from './components/VIewMine';

function App() {
  return (
    <div>

      <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/add" element={<><NavBar/><AddPost/></>} />
        <Route path="/view" element={<><NavBar/><ViewAll/></>} />
        <Route path="/viewmine" element={<><NavBar/><VIewMine/></>} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
