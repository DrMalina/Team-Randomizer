import React, { useState } from "react";

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ResultList = props => {
  const createPair = () => {
    const users = shuffle(props.users);
    const teams = shuffle(props.teams);

    let results = {};

    if (users.length <= teams.length) {
      users.forEach((user, index) => {
        results[user] = teams[index];
      });
    } else {
      const teamsLength = teams.length;

      for (let i = 0; i <= teamsLength - 1; i++) {
        results[users[i]] = teams[i];
      }

      for (let i = teamsLength; i <= users.length - 1; i++) {
        results[users[i]] =
          teams[Math.floor(Math.random() * (teamsLength - 1) + 0)];
      }
    }

    return results;
  };

  console.log(createPair());

  return <div>test</div>;
};

export default ResultList;
