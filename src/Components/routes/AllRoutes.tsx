import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import LeaderBoard from "../Admin/LeaderBoard/Dashboard";
import Match from "../Admin/Start/Dashboard";
// import Users from "../Admin/view/Dashboard";

import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import HomeSreeen from "../landingPage/HomeSreeen";

//User Routes begins from here
import UserDashboard from "../UserDashboard/Dashboard";
import UserLeaderboard from "../UserDashboard/LeaderBoard/Dashboard";
import OtherForm from "../UserDashboard/PredictData";
import UserMatch from "../UserDashboard/Start/Dashboard";
import Prediction from "../UserDashboard/viewPrediction/Dashboard";

const AllRoutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomeSreeen />,
    },
    {
      path: "/get-started",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/admindashboard",
      element: <Dashboard />,
    },
    {
      path: "/leaderboard",
      element: <LeaderBoard />,
    },
    {
      path: "/start-match",
      element: <Match />,
    },
    {
      // path: "/view-users",
      // element: <Users />,
    },

    {
      path: "/userdashboard",
      element: <UserDashboard />,
    },
    {
      path: "/useViewBoard",
      element: <UserLeaderboard />,
    },
    {
      path: "/userMatch",
      element: <UserMatch />,
    },
    {
      path: "/Prediction",
      element: <Prediction />,
    },
    // {
    //   path: "/Prediction/:ID",
    //   element: <OtherForm />,
    // },
  ]);
  return <div>{elements}</div>;
};

export default AllRoutes;
