import './App.css';
import { Header, Footer, Navbar } from './components';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Navbar />
      <Footer />
    </>
  )
}

export default App;
