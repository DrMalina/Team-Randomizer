import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    padding: "10px 0",
    width: "100%"
  }
}));

const AddUsers = props => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.handleInputSubmit(inputValue);
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        component="form"
        xs={9}
        item
        style={{ paddingRight: "16px" }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="addUsers"
          label="Add players"
          placeholder="Hit enter to add a user"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid xs={3} item>
        <Button
          color="primary"
          variant="outlined"
          className={classes.btn}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddUsers;
