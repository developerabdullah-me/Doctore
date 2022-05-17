
import './App.css';
import Header from './Pages/Sheare/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';

import Login from './Pages/User/Login/Login';
import Footer from './Pages/Sheare/Footer/Footer';
import SingUp from './Pages/User/SignUp/SingUp';
import RequireAuth from './Pages/User/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/singUp' element={<SingUp></SingUp>}></Route>
     </Routes>
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
