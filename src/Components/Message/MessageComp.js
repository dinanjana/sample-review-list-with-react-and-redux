import React from 'react';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

const MessageComponent = ({ message }) => {
  if (message) {
    return(
      <Paper>
        {message}
      </Paper>
    )
  }
  return '';
};

export default MessageComponent;