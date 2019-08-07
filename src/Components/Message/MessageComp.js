import React from 'react';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

const MessageComponent = ({ message, cleanMessages }) => {
  if (message) {
    setTimeout(cleanMessages, 7000);
    return(
      <Paper>
        {message}
      </Paper>
    );
  }
  return '';
};

export default MessageComponent;