import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthorCompanyAdminRouter({ children }) {
    const {role} = useSelector((state) => state.authReducer)

    if (role == 0 || !role) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default AuthorCompanyAdminRouter