import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { ContactUs } from './components/ContactUs';
import Dashboard from './pages/Dashboard'; // Import your Dashboard component
import ProtectedRoute from './components/ProtectedRoute';
import { Navbar } from './components/Navbar'; // Import Navbar

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
