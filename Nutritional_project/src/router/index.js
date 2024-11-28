import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Logo = lazy(() => import("../layout/LogoPage"));
const Register = lazy(() => import("../page/login/Register"));
const Login = lazy(() => import("../page/login/Login"));
const Main = lazy(() => import("../page/main"));

const Record = lazy(() => import("../page/record"));

const BmiWeight = lazy(() => import("../page/main/components/bmi/BmiWeight"));
const BmiHeight = lazy(() => import("../page/main/components/bmi/BmiHeight"));
const BmiResult = lazy(() => import("../page/main/components/bmi/BmiResult"));
const Chat = lazy(() => import("../page/main/components/Chat_gpt"));

const Statistic = lazy(() => import("../page/statistic"));
const Week = lazy(() => import("../page/statistic/component/Week"));
const DrinkRecord = lazy(() => import("../page/record/component/DrinkRecord"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "main",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "weight",
        element: (
          <Suspense fallback={<Loading />}>
            <BmiWeight />
          </Suspense>
        ),
      },
      {
        path: "height",
        element: (
          <Suspense fallback={<Loading />}>
            <BmiHeight />
          </Suspense>
        ),
      },
      {
        path: "result",
        element: (
          <Suspense fallback={<Loading />}>
            <BmiResult />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        ),
      },

      {
        path: "record",
        element: (
          <Suspense fallback={<Loading />}>
            <Record />
          </Suspense>
        ),
      },

      {
        path: "statistic",
        element: (
          <Suspense fallback={<Loading />}>
            <Statistic />
          </Suspense>
        ),
      },
      {
        path: "week",
        element: (
          <Suspense fallback={<Loading />}>
            <Week />
          </Suspense>
        ),
      },
      {
        path: "drinkrecord",
        element: (
          <Suspense fallback={<Loading />}>
            <DrinkRecord />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
