import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import AdminPage from './pages/admin';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App