import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Navhead from './components/Navhead';
import Footer from './components/Footer';
import Addtask from './components/Addtask';
import Edittask from './components/Edittask';



function App() {
  return (

    <div >
      <Navhead/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/addtask' element={<Addtask/>}/>
        <Route path='/edit/:id' element={<Edittask/>}/>
    
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
