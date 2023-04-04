import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteForLoginUser = (props) => {
  return(
    !props.login ? <Outlet /> : <Navigate to='/'/>
  )
}

export default PrivateRouteForLoginUser;