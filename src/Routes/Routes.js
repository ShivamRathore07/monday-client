import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import Edit from "../Components/EditPrice/Edit";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/HomePage/Home";
import PrivateRoutes from "../protected/PrivateRoutes";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { userData } = useSelector((s) => s.userReducer);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
            {userData.role==="ADMIN" &&
            <Route exact path="/editPrice" element={<Edit />} />
            }
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
