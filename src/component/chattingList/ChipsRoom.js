import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ChipsRoom() {
  const classes = useStyles();


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label="인기방"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방2"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방3"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방4"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방5"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방6"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방4"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방5"
        onClick={handleClick}
      />
      <Chip
        icon={<FaceIcon />}
        label="인기방6"
        onClick={handleClick}
      />
    </div>
  );
}
