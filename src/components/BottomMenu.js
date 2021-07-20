import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import './components.css'

const useStyles = makeStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000',
      color: '#fff',
      '&$selected': {
        color: 'red',
    }
    },
    i: { 
        fontSize: '1.5em !important',
    color: '#fff',}
  });
  
  
  const BottomMenu = () => {
      const classes = useStyles();

    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);}}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label=""   icon={<HomeIcon className={classes.i} />} />
            <BottomNavigationAction label=""  icon={<SearchIcon className={classes.i} />} />
            <BottomNavigationAction label=""  icon={<FavoriteIcon className={classes.i} />} />
        </BottomNavigation>
    );
}

export default BottomMenu
