import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ProfilePage from './pages/ProfilePage';
// import Login from './components/Login/Login'
import Login from './components/Login/Login'
import Register from './components/Login/Register'


// import DetailsPage from './pages/DetailsPage';

function App() {

  
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/detail' element={<DetailsPage />} />
          <Route path='/profile' element={<ProfilePage />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
