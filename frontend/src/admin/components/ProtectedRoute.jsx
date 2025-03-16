import { Navigate } from "react-router-dom";

const ProtectedRoute=({children})=>{
    const token = localStorage.getItem('auth_token');
    return token ? children:<Navigate to="/admin" />
}
export default ProtectedRoute;