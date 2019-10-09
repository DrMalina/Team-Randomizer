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
  const [teams, setTeam] = useState([
    { team: "FC Barcelona", id: 1 },
    { team: "Real Madrid", id: 2 },
    { team: "Liverpool", id: 3 },
    { team: "Manchester United", id: 4 },
    { team: "Manchester City", id: 5 },
    { team: "FC Bayern", id: 6 },
    { team: "Juventus", id: 7 },
    { team: "PSG", id: 8 }
  ]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputSubmit = (category, element) => {
    if (category === "userInput") {
      setUser([
        ...users,
        { user: element, id: `${element.replace(/\s/g, "")}-${Date.now()}` }
      ]);
    } else if (category === "teamInput") {
      setTeam([
        ...teams,
        { team: element, id: `${element.replace(/\s/g, "")}-${Date.now()}` }
      ]);
    }
  };

  const deleteItem = (category, index) => {
    if (category === "users") {
      setUser(users.filter((user, idx) => idx !== index));
    } else if (category === "teams") {
      setTeam(teams.filter((team, idx) => idx !== index));
    }
  };

  const clearAll = category => {
    if (category === "users") {
      setUser([]);
    } else if (category === "teams") {
      setTeam([]);
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
              category="userInput"
              label="Add Player"
              placeholder="Type a name of a user"
            />
            <ItemsList
              category="users"
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
              category="teamInput"
              label="Add Team"
              placeholder="Type a name of a team"
            />
            <ItemsList
              category="teams"
              items={teams}
              deleteItem={deleteItem}
              clearAll={clearAll}
            />
            <Grid container spacing={3}>
              <Grid
                item
                xs={teams.length >= 2 ? 6 : 12}
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
        return (
          <ResultList users={users} teams={teams} onPrevClick={prevStep} />
        );
      default: {
        return <StartingScreen />;
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Header setStep={setStep} />
      <Container component="main" maxWidth="sm" className={classes.main}>
        {renderContent()}
      </Container>
    </>
  );
};

export default App;
