// App.js 또는 index.js 등에서
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
