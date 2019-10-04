import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          FIFA Randomizer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
