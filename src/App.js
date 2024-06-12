import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './Component/Footer';
import Home from './Component/Home';
import Page3 from './Component/Page3';
import CreateAccount from './Component/CreateAccount';
// import UploadFile from './Component/UploadFile';
import UploadFile from './Component/UploadFile';
import Page22 from './Component/Page22';
import Testform from './Component/Testform';

function App() {
  return (
      <div>
           
                <Routes>
                     <Route exact path='/' element={<Home/>}/>
                     <Route  path='/UploadFile' element={<UploadFile/>}/>
                     <Route exact path='/Page22' element={<Page22/>}/>
                     <Route exact path='/Page3' element={<Page3/>}/>
                     <Route exact path='/CreateAccount' element={<CreateAccount/>}/>
                     <Route exact path ='/TestForm' element={<Testform/>}/>
               </Routes>
           {<Footer/>}
      </div>
  );
}

export default App;
