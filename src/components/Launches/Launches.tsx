import React, { useEffect, useState, FC } from "react";
import { LaunchType } from "../../types/launches";
import { api } from "../../api";
import { Grid } from "@mui/material";
import Launch from "../Launch/Launch";

import "./Launches.css";

type GetPropsLaunch = {
  launches: LaunchType[];
};

const Launches: FC<GetPropsLaunch> = ({ launches }) => {
  return (
    <div className="launches_container">
      <h2>all our missions</h2>

      <Grid container spacing={2}>
        {launches.map(launch => (
          <Launch key={launch.flight_number} launch={launch} />
        ))}
      </Grid>
    </div>
  );
};

export default Launches;
