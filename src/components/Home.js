import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import {
  Button,
  Typography,
  makeStyles,
  Container,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import UserDetails from "./UserDetails";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const [text, setText] = useState("FlutterBase");
  const [userList, setUserList] = useState(null);
  const [id, setId] = useState(null);

  const classes = useStyles();

  let params = new URLSearchParams(window.location.search);

  const onDetails = (id) => {
    params.set("userId", id);
    window.location.search = params;
  };

  useEffect(() => {
    Axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const data = res.data.data;
      console.log(data);
      let list = [];
      for (const user of data) {
        list.push(
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={user.avatar} />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  {user.email}
                  <br />
                  {user.first_name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => onDetails(user.id)}>
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      }
      setUserList(list);
    });
  }, [userList == null]);

  useEffect(() => {
    if (params.get("userId") != null) setId(params.get("userId"));
  }, [id == null && params.get("userId") != null]);

  return (
    <Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to {text}
            </Typography>
            <center>
              <Button
                style={{ marginRight: 30 }}
                variant="contained"
                component="label"
                onClick={() => setText("Changed")}
              >
                Change State
              </Button>
            </center>
            {id != null ? <UserDetails id={id} /> : null}
          </Container>
          {userList == null ? (
            <center style={{ marginTop: 30 }}>
              <CircularProgress />
              <Typography>Loading User List...</Typography>
            </center>
          ) : userList.length === 0 ? (
            <center style={{ marginTop: 30 }}>
              <Typography>No Users</Typography>
            </center>
          ) : null}
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={5}>
              {userList}
            </Grid>
          </Container>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
