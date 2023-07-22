import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LaunchType } from "../../types/launches";

import { useNavigate } from "react-router-dom";

import "./Launch.css";

type LaunchProps = {
  launch: LaunchType;
};

const Launch: React.FC<LaunchProps> = ({ launch }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: "220px", margin: 1.3 }}>
      <CardMedia
        sx={{ height: 120, width: "100%", backgroundSize: "contain" }}
        image={launch.links.mission_patch}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {launch.mission_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {launch.launch_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/launch/details/${launch.flight_number}`)}>
          Learn more
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default Launch;
