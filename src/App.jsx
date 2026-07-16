import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import AdminPage from './pages/admin';
import DashboardPage from './pages/Dashboard';
import UsersPage from './pages/users';
import ProjectsPage from './pages/projects.tsx';
import RevenuePage from './revenue/index.jsx';
import TasksPage from './pages/tasks/index.jsx';
import SettingsPage from './pages/setting';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App