import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Logo = lazy(() => import("../layout/LogoPage"));
const Main = lazy(() => import("../page/main"));
const Login1 = lazy(() => import("../page/login/Login1"));
const Login2 = lazy(() => import("../page/login/Login2"));
const Login3 = lazy(() => import("../page/login/Login3"));
const Login4 = lazy(() => import("../page/login/Login4"));

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
            <Logo />
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
        path: "login1",
        element: (
          <Suspense fallback={<Loading />}>
            <Login1 />
          </Suspense>
        ),
      },
      {
        path: "login2",
        element: (
          <Suspense fallback={<Loading />}>
            <Login2 />
          </Suspense>
        ),
      },
      {
        path: "login3",
        element: (
          <Suspense fallback={<Loading />}>
            <Login3 />
          </Suspense>
        ),
      },
      {
        path: "login4",
        element: (
          <Suspense fallback={<Loading />}>
            <Login4 />
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
