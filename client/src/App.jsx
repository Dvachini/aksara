import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Landing from './Landing/LandingPage';
const About = lazy(() => import('./Landing/About'));
const NotFound = lazy(() => import('./not-found/NotFound'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
