import { Navigate, Outlet } from 'react-router-dom';
import { useLoginStore } from '../store/useLoginStore';

export default function ProtectedRoute() {
  const { isLogin } = useLoginStore();
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
}
