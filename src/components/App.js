import React, { useState } from "react";
import { CssBaseline, Container, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import StartingScreen from "./StartingScreen";
import AddItems from "./AddItems";
import ItemsList from "./ItemsList";
import ResultList from "./ResultList";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
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
  const [users, setUser] = useState([]);
  const [teams, setTeams] = useState([
    "FC Barcelona",
    "Real Madrid",
    "Liverpool",
    "Manchester United",
    "Manchester City",
    "FC Bayern",
    "Juventus",
    "PSG"
  ]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputSubmit = (id, element) => {
    if (id == "userInput") {
      setUser([...users, element]);
    } else if (id == "teamInput") {
      setTeams([...teams, element]);
    }
  };

  const deleteItem = (id, index) => {
    if (id == "users") {
      setUser(users.filter((user, idx) => idx !== index));
    } else if (id == "teams") {
      setUser(teams.filter((team, idx) => idx !== index));
    }
  };

  const clearAll = id => {
    if (id == "users") {
      setUser([]);
    } else if (id == "teams") {
      setTeams([]);
    }
  };

  const unlockBtn = (items, btnDescription) => {
    if (items.length >= 2) {
      return (
        <Button color="primary" variant="contained" onClick={() => nextStep()}>
          {btnDescription}
        </Button>
      );
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <StartingScreen nextStep={nextStep} />;

      case 2:
        return (
          <>
            <AddItems
              handleInputSubmit={handleInputSubmit}
              id="userInput"
              label="Add Player"
              placeholder="Type a name of a user"
            />
            <ItemsList
              id="users"
              items={users}
              deleteItem={deleteItem}
              clearAll={clearAll}
            />
            {unlockBtn(users, "next")}
          </>
        );

      case 3:
        return (
          <>
            <AddItems
              handleInputSubmit={handleInputSubmit}
              id="teamInput"
              label="Add Team"
              placeholder="Type a name of a team"
            />
            <ItemsList
              id="teams"
              items={teams}
              deleteItem={deleteItem}
              clearAll={clearAll}
            />
            <Grid container spacing={3}>
              <Grid
                item
                xs={teams.length >= 2 ? "6" : "12"}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => prevStep()}
                >
                  Go back
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                {unlockBtn(teams, "randomize")}
              </Grid>
            </Grid>
          </>
        );

      case 4:
        return <ResultList users={users} teams={teams} />;
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
