import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Users from './component/users';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/users' element={<Users/>}/>
     </Routes>
    </>
  );
}

export default App;
