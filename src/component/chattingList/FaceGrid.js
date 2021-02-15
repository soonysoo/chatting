import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const ParticipantList = [
    {
        userID:"user1",
        num : 1,
        roomKey : "key1",
    },
    {
        userID:"user2",
        num : 2,
        roomKey : "key1",
    },
    {
        userID:"user3",
        num : 3,
        roomKey : "key1",
    },
    {
        userID:"user4",
        num : 4,
        roomKey : "key1",
    }
];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
    width: '100',
  },
}));

export default function FaceGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {ParticipantList.map((part)=>(
            <Grid  key={part.num} item xs={12} sm={6}>
                <Paper className={classes.paper}>{part.userID}</Paper>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}
