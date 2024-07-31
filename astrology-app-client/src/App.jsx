import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Services from './components/Services';
import { ContactUs } from './components/ContactUs';
import Dashboard from './pages/Dashboard'; // Import your Dashboard component
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/services' element={<Services />} />
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
  );
}

export default App;
