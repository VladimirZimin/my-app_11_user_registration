import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/products"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/products"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="about"
            element={<PrivateRoute component={<About />} redirectTo="/login" />}
          />
          <Route
            path="products"
            element={
              <PrivateRoute component={<Products />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
