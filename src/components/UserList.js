import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  IconButton
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const UserList = props => {
  return (
    <>
      <List style={{ width: "90%", marginTop: "16px" }}>
        <Paper>
          {props.users.map((user, idx) => (
            <ListItem
              key={idx}
              style={{ padding: "16px" }}
              divider={idx !== props.users.length - 1}
            >
              <ListItemText primary={user} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <ClearIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          <ListItem></ListItem>
        </Paper>
      </List>
    </>
  );
};

export default UserList;
