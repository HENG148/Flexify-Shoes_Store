import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
