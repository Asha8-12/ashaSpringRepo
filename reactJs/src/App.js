import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Dashboard from './Component/Dashboard';
import HomePage from './Pages/HomePage';
import MainLayout from './Layuot/MainLayout';
import EventPage from './Pages/EventPage';
import UploadEvent from './Pages/UploadEvent';
import ForgetPassword from './Pages/ForgetPassword';
import Register from './Pages/Register';
import ViewEvent from './Pages/ViewEvent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='forget' element={<ForgetPassword/>}/>
        <Route path='register' element={<Register/>}/>


        <Route path='Main' element= {<MainLayout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='event' element={<EventPage/>}/>
          <Route path='upload_event' element={<UploadEvent/>}/>
          <Route path='upload_event/:id' element={<UploadEvent/>}/>
          <Route path='contact'element={<Contact/>}/>
          <Route path='home' element={<HomePage/>}/>
          <Route path="view_event/:id" element={<ViewEvent />} />

        </Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App