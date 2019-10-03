import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import StartingScreen from "./StartingScreen";
import AddUsers from "./AddUsers";
import UserList from "./UserList";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const App = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [users, setUser] = useState(["mac", "rob"]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputSubmit = element => {
    setUser([...users, element]);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <StartingScreen nextStep={nextStep} />;

      case 2:
        return (
          <>
            <AddUsers handleInputSubmit={handleInputSubmit} />
            <UserList users={users} />
          </>
        );
    }
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="sm" className={classes.main}>
        {renderContent()}
      </Container>
    </>
  );
};

export default App;
