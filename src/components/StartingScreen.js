import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  btn: {
    marginTop: theme.spacing(3),
    width: "30%",
    textTransform: "uppercase"
  }
}));

const StartingScreen = props => {
  const classes = useStyles();

  const continueToNextStep = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        FIFA Teams Shuffler
      </Typography>
      <Typography
        component="h2"
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
        Add players and football teams to randomly generate a team for each
        user. May the luck be with you!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={continueToNextStep}
      >
        Get Started
      </Button>
    </>
  );
};

export default StartingScreen;
