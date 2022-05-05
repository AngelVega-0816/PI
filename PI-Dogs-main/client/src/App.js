import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import { Routes, Route} from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/dogs/:id'  element={<Details/>}/>

      </Routes>
      

    </div>
  );
}

export default App;
