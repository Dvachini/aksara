import { BrowserRouter, Routes, Route } from 'react-router';

import Landing from './Landing/LandingPage';
import About from './Landing/About';
import NotFound from './not-found/NotFound';

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
