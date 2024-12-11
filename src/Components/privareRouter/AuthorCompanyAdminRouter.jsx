import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthorCompanyAdminRouter({ children }) {
    const {role, switchSignIn } = useSelector((state) => state.authReducer)
    if (role == 0 || !role && !switchSignIn) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default AuthorCompanyAdminRouter