import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const roomlist = [
  {
    roomTitle:"대화명",
    totalNum:5,
    isNum:3,
    imageUrl : "/static/images/avatar/3.jpg"
  },
  {
    roomTitle:"대화명2",
    totalNum:5,
    isNum:3,
    imageUrl : "/static/images/avatar/3.jpg"
  },
  {
    roomTitle:"대화명3",
    totalNum:5,
    isNum:3,
    imageUrl : "/static/images/avatar/3.jpg"
  },
  {
    roomTitle:"대화명4",
    totalNum:5,
    isNum:3,
    imageUrl : "/static/images/avatar/3.jpg"
  },
  {
    roomTitle:"대화명5",
    totalNum:5,
    isNum:3,
    imageUrl : "/static/images/avatar/3.jpg"
  }
]

export default function FolderList() {
  const classes2 = useStyles2();
  return (
   <List className={classes2.root}> 
    {roomlist.map((room)=>(
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={room.imageUrl} className={classes2.large}/>
          </ListItemAvatar>
          <ListItemText primary={room.roomTitle} secondary="참여인원 1/2" />
          <Button  style={{float:"right"}} variant="outlined" color="primary">
            입장하기
          </Button>
      </ListItem>
    ))}
  </List> 
  );
}
