import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';

// Routes Import
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import InitialRoute from './InitialRoute';

// Components Import
import Login from '../../features/Login';
import { Search } from '../../features/Search';
import Register from '../../features/Register';
import { MyOrders } from '../../features/Order';
import { Profile } from '../../features/Profile';
import { ParlourDetails } from '../../features/Parlour';
// import { UnderConstruction } from '../../features/UnderConstruction';

const AppRoutes = () => (
  <Routes>
    <Route path="/">
      {/* Public Routes */}
      <Route
        index
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route element={<Layout />}>
        {/* Private Routes */}
        <Route
          path="search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="parlours/:id"
          element={
            <PrivateRoute>
              <ParlourDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="orders"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Route For Initial User */}
      <Route
        path="register"
        element={
          <InitialRoute>
            <Register />
          </InitialRoute>
        }
      />
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
