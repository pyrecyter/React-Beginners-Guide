import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const LoggedNavbar = () => {
  const classes = useStyles();
  const { setToken } = useContext(TokenContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          React Basic
        </Typography>
        <Link className={classes.link} to="/home">
          <Button color="inherit">Home</Button>
        </Link>
        <Button color="inherit" onClick={() => setToken("")}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedNavbar;
