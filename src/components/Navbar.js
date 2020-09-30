import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          React Basic
        </Typography>
        <Link className={classes.link} to="/home">
          <Button color="inherit">Home</Button>
        </Link>
        <Link className={classes.link} to="/login">
          <Button color="inherit">login</Button>
        </Link>
        <Link className={classes.link} to="/register">
          <Button color="inherit">register</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
