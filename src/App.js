import logo from './logo.svg';
import './App.css';
import Header from './Pages/Sheare/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/User/Login/Login';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
