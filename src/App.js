import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Router,Route} from "react-router-dom"
import Header from './Component/Header';
import OurOffice from './Component/OurOffice';
import Home from './Component/Home';
import Bio from './Component/Bio';
import Footer from './Component/Footer';
import Misson from './Component/Misson';
import Service from './Component/Service';
import People from './Component/People';
import Staffs from './Component/Staffs';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/' element={<Home/>} />
          </Routes>
          <Routes>
            <Route  path='/' element={<Footer/>} />
          </Routes>

          <Routes>
            <Route  path='/our+office' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/our+office' element={<OurOffice/>} />
          </Routes>
          <Routes>
            <Route  path='/our+office' element={<Footer/>} />
          </Routes>


          <Routes>
            <Route  path='/our+misson' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/our+misson' element={<Misson/>} />
          </Routes>
          <Routes>
            <Route  path='/our+misson' element={<Footer/>} />
          </Routes>


          <Routes>
            <Route  path='/our+service' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/our+service' element={<Service/>} />
          </Routes>
          <Routes>
            <Route  path='/our+service' element={<Footer/>} />
          </Routes>


          <Routes>
            <Route  path='/our+people' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/our+people' element={<People/>} />
          </Routes>
          <Routes>
            <Route  path='/our+people' element={<Footer/>} />
          </Routes>


          <Routes>
            <Route  path='/our+staff' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/our+staff' element={<Staffs/>} />
          </Routes>
          <Routes>
            <Route  path='/our+staff' element={<Footer/>} />
          </Routes>


          <Routes>
            <Route  path='/bio' element={<Header/>} />
          </Routes>
          <Routes>
            <Route  path='/bio' element={<Bio/>} />
          </Routes>
          <Routes>
            <Route  path='/bio' element={<Footer/>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
