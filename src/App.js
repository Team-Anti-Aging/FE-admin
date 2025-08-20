import { BrowserRouter, Routes, Route } from 'react-router-dom';

//페이지
import Home from './views/Home';
import LoginPage from './views/LoginPage';
import NotFound from './views/NotFound';
import ServerError from './views/ServerError';

//레이아웃
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/serverError" element={<ServerError />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
