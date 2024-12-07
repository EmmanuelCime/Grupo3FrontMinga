import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const token = useSelector((state) => state.authReducer?.token)
    const isAuthenticated = !!token && token !== "expired"

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />
    }
    return children
}

export default PrivateRoute