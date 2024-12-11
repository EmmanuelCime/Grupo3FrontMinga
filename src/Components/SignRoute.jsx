import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function SignRoute({children}) {
    const token = useSelector((state)=>state.authReducer.token)
    const {role, switchSignIn } = useSelector((state) => state.authReducer)
    if (token && !switchSignIn) {
        return <Navigate to="/home" replace />
    }
    return children
}

export default SignRoute