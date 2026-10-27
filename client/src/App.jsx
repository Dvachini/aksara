import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Landing from './Landing/LandingPage';
const About = lazy(() => import('./Landing/About'));
const NotFound = lazy(() => import('./not-found/NotFound'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className='min-h-screen bg-brand-pale' />}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
