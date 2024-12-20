import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginRouter({ children }) {
    const {role} = useSelector((state) => state.authReducer)

    if (role == null) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default LoginRouter