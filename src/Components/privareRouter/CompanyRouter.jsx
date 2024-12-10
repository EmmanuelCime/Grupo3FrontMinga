import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function CompanyRouter({ children }) {
    const {role} = useSelector((state) => state.authReducer)

    if (role != 2) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default CompanyRouter