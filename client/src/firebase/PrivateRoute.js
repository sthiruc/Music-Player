// import React, { useContext } from 'react';
// import { useNavigate, Route } from 'react-router-dom';
// import { AuthContext } from './auth';

// const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

//     const navigate = useNavigate();

// 	const { currentUser } = useContext(AuthContext);

// 	return (
// 		<Route
// 			{...rest}
// 			render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : navigate('/register'))}
// 		/>
// 	);
// };

// export default PrivateRoute;

import React, { useContext } from 'react';
import {  Navigate } from "react-router-dom";
//import { useAuth } from "../contexts/AuthContext";
import { AuthContext } from './auth';

export default function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to="/dashboard" />;
}