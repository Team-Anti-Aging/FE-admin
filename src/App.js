// App.js 또는 index.js 등에서
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
