import React from "react";
import { List, ListItem, ListItemText, Paper, Button } from "@material-ui/core";

//Helper fn to shuffle arrays
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Helper fn to match user and random team to create a pair
const createPair = (usersArray, teamsArray) => {
  // array of objects
  const users = shuffle(usersArray.map(element => element.user));
  const teams = shuffle(teamsArray.map(element => element.team));

  let results = {};

  if (users.length <= teams.length) {
    // when users > teams for each user get one team
    users.forEach((user, index) => {
      results[user] = teams[index]; // teams will NOT BE REPEATED
    });
  } else {
    // when users < teams, teams REPEATED ONLY WHEN NECCESSARY
    const teamsLength = teams.length;

    /* 
    Simple Math.random would do the job, however it could lead to situation like:
    userA : teamA , userB : teamA, userC : teamA, userD : teamA ... 
    // 1 team could be repeated many times, and some teams could have been left out
    */

    for (let i = 0; i <= teamsLength - 1; i++) {
      // First loop will make sure that each team will be paired
      results[users[i]] = teams[i];
    }

    for (let i = teamsLength; i <= users.length - 1; i++) {
      // For the rest users, team will be picked randomly
      results[users[i]] =
        teams[Math.floor(Math.random() * (teamsLength - 1) + 0)];
    }

    // For instance: 7 users and 6 teams will result in only 1 team being repeated
  }
  return results; //e.g. {userA: teamC, userB: teamA...}
};

const ResultList = props => {
  const pairs = Object.entries(createPair(props.users, props.teams)); // from {a:b, c:d} to [[a,b],[c,d]] to map it over

  return (
    <List
      style={{
        width: "90%",
        marginTop: "16px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Paper>
        {pairs.map((element, idx) => (
          <ListItem key={idx} style={{ padding: "16px" }} divider>
            <ListItemText
              primary={element[0]} //key: user
              secondary={element[1]} //value: team
              style={{ textAlign: "center" }}
            />
          </ListItem>
        ))}
      </Paper>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => props.onPrevClick()}
        style={{ maxWidth: "50%", alignSelf: "center", marginTop: "20px" }}
      >
        Go back
      </Button>
    </List>
  );
};

export default ResultList;
