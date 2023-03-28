import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  return(
    props.login ? <Outlet /> : <Navigate to='/'/>
  )
}

export default PrivateRoute;