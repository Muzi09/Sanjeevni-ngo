import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("../Pages/Home"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const TermsAndCondiiton = lazy(() => import("../Pages/TermsAndCondition"));

const PrivacyPolicies = lazy(() => import("../Pages/OurPolicies/PrivacyPolicies"));
const ShippingDelivery = lazy(() => import("../Pages/OurPolicies/ShippingDelivery"));
const CancellationRefunds = lazy(() => import("../Pages/OurPolicies/CancellationRefunds"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Suspense>
                <Home />
              </Suspense>
            </Layout>
          }
        />


        <Route
          path="/about-us"
          element={
            <Layout>
              <Suspense>
                <AboutUs />
              </Suspense>
            </Layout>
          }
        />


        <Route
          path="/contact-us"
          element={
            <Layout>
              <Suspense>
                <ContactUs />
              </Suspense>
            </Layout>
          }
        />


        <Route
          path="/our-policies/privacy-policy"
          element={
            <Layout>
              <Suspense>
                <PrivacyPolicies />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/our-policies/shipping-and-delivery"
          element={
            <Layout>
              <Suspense>
                <ShippingDelivery />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/our-policies/cancellation-and-refund"
          element={
            <Layout>
              <Suspense>
                <CancellationRefunds />
              </Suspense>
            </Layout>
          }
        />


        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <Suspense>
                <TermsAndCondiiton />
              </Suspense>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
