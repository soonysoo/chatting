import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const myroomlist = [
  {
    roomTitle:"MY대화방 1",
    imageUrl : "/static/images/avatar/3.jpg",
    lastWord : "마지막 멘트",  
  },
  {
    roomTitle:"MY대화방2",
    imageUrl : "/static/images/avatar/3.jpg",
    lastWord : "마지막 멘트",
  },
  {
    roomTitle:"MY대화방3",
    imageUrl : "/static/images/avatar/3.jpg",
    lastWord : "마지막 멘트",
  },
  {
    roomTitle:"MY대화방4",
    imageUrl : "/static/images/avatar/3.jpg",
    lastWord : "마지막 멘트",
  },
  {
    roomTitle:"MY대화방5",
    imageUrl : "/static/images/avatar/3.jpg",
    lastWord : "마지막 멘트",
  }
]


const useStyles3 = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MyFolderList() {
  const classes3 = useStyles3();
  return (
    <List className={classes3.root}>
      {myroomlist.map((room)=>(
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={room.imageUrl} className={classes3.large} />
          </ListItemAvatar>
          <ListItemText primary={room.roomTitle} secondary={room.lastWord} />
          <Button style={{ float: "right" }} variant="outlined" color="primary">
            대화하기
              </Button>
        </ListItem>
      ))}
    </List>
  );
}
