import { Routes, Route, Navigate } from 'react-router-dom';

// Routes Import
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import InitialRoute from './InitialRoute';

// Components Import
import Login from '../../features/Login';
import Register from '../../features/Register';
// import Search from '../../features/Search';
// import MyProfile from '../../features/Profile';
import UnderConstruction from '../../features/UnderConstruction';
// import MyOrders from '../../features/MyOrders';
// import Callback from '../../features/Callback';
// import MyProfile from '../../features/Profile';

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route
      path="/"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />

    {/* Private Route */}
    <Route
      path="/under-construction"
      element={
        <PrivateRoute>
          <UnderConstruction />
        </PrivateRoute>
      }
    />

    {/* Private Routes */}
    {/* <Route
      path="/search"
      element={
        <PrivateRoute>
          <Search />
        </PrivateRoute>
      }
    />
    <Route
      path="/myprofile"
      element={
        <PrivateRoute>
          <MyProfile />
        </PrivateRoute>
      }
    /> */}

    {/* <PublicRoute path="/search" component={Search} /> */}

    {/* <PrivateRoute path="/myprofile" component={MyProfile} /> */}
    {/* <PublicRoute path="/myprofile" component={MyProfile} /> */}

    {/* Route For Initial User */}
    <Route
      path="/register"
      element={
        <InitialRoute>
          <Register />
        </InitialRoute>
      }
    />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
