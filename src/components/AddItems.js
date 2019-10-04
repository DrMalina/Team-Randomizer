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

const AddItems = props => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue) {
      // to prevent adding empty values
      props.handleInputSubmit(id, inputValue);
      setInputValue("");
    }
  };

  const classes = useStyles();

  const { id, label, placeholder } = props;

  return (
    <Grid
      container
      className={classes.root}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid xs={9} item style={{ paddingRight: "16px" }}>
        <TextField
          id={id}
          label={label}
          placeholder={placeholder}
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

export default AddItems;
