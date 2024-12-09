import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthorRouter({ children }) {
    const {role} = useSelector((state) => state.authReducer)

    if (role != 1) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default AuthorRouter