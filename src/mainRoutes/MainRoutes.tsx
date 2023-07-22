import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { api } from "../api";
import Launches from "../components/Launches/Launches";
import LaunchesDetails from "../components/LaunchesDetails/LaunchesDetails/LaunchesDetails";
import { LaunchType } from "../types/launches";

const MainRoutes = () => {
  // const [launch, setLaunch] = useState<LaunchType[] | null>(null);
  // const getProps = (props: LaunchType[] | null) => {
  //   setLaunch(props);
  // };

  const [launches, setLaunches] = useState<LaunchType[]>([]);

  useEffect(() => {
    const fetchLaunchesAndSet = async () => {
      const fetchedLaunches = await api.fetchAllLaunches();
      setLaunches(fetchedLaunches);
    };

    fetchLaunchesAndSet();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Launches launches={launches} />} />
      <Route
        path="/launch/details/:id"
        element={<LaunchesDetails launches={launches} />}
      />
    </Routes>
  );
};

export default MainRoutes;
