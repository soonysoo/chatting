import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:  {
    bottom: 0,
    right :0,
    left:0,
    position : "fixed",
    width: '100%',
    height : 60,
  }
}));

export default function ButtonRoom(props) {
  const classes = useStyles();

  return (
    <div >
      <Button onClick=""
        variant="contained"
        color="primary" 
        className={classes.root}>
        {props.name}
      </Button>
    </div>  
  );
}
