import React, { lazy, Suspense } from "react";
// import { Login } from "../Components/Login";
import {  Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer.jsx/Footer";
import Headers from "../Components/Header/Headers";
import Spinner from '../Components/Spinner/Spinner';

const Home = lazy(() => import('../Pages/Home/Home'));
const CollectionsOverview = lazy(() => import('../Components/Collection/CollectionOverview'));
const ItemOverview = lazy(() => import('../Pages/ItemOverview/ItemOverview'));
const CartItems = lazy(() => import('../Pages/CartItems/CartItems'));
const AboutPage = lazy(() => import('../Pages/AboutPage/AboutPage'));
const UserAuth = lazy(() => import('../Pages/UserAuth/UserAuth'));

export const RoutesPage = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Headers />
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/signin" element={<UserAuth />} />
            <Route exact path="/shop" element={<CollectionsOverview />} />
            <Route exact path="/shop/:id" element={<ItemOverview />} />
            <Route exact path="/cart" element={<CartItems />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};
