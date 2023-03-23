import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const location = useLocation();
  console.log(props.login)
  return(
    props.login ? <Outlet /> : <Navigate to='/'/>
  )
}

export default PrivateRoute;