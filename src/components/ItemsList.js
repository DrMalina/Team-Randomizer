import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  IconButton
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const ItemsList = props => {
  const renderClearBtn = () => {
    if (props.items.length > 1) {
      return (
        <ListItem button onClick={() => props.clearAll(props.id)}>
          <ListItemText
            primary="Clear All"
            style={{ textAlign: "center", textTransform: "uppercase" }}
          ></ListItemText>
        </ListItem>
      );
    }
  };

  return (
    <>
      <List style={{ width: "90%", marginTop: "16px", marginBottom: "16px" }}>
        <Paper>
          {props.items.map((element, idx) => (
            <ListItem key={idx} style={{ padding: "16px" }} divider>
              <ListItemText primary={element} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => props.deleteItem(props.id, idx)}
                >
                  <Clear />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {renderClearBtn()}
        </Paper>
      </List>
    </>
  );
};

export default ItemsList;
