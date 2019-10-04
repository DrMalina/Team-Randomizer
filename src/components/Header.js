import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1
  }
}));

const Header = ({ setStep }) => {
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
          <Link
            component="button"
            variant="h6"
            underline="none"
            style={{ color: "white" }}
            onClick={() => setStep(1)}
          >
            FIFA Randomizer
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
