
import { memo, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';

const useStyles = makeStyles(theme => ({
  menuItem: {
    flexDirection: 'row',
    width: 'fit-content',
    minHeight: '100%',
    padding: 0
  }, 
  typography: {
    fontFamily: 'LEXIO', 
    fontWeight: 'bold', 
    fontSize: '20px', 
    marginRight: '10px', 
    '&:hover': {
      cursor: 'pointer', 
      borderBottom: '4px solid #f95215'
    },
  }
}));

const TopAppBarMenu = () => {
  const classes = useStyles();
  const [activeMenu, setActiveMenu] = useState('');
    
  return (
    <>
      <ListItem className={classes.menuItem}>
        <Link to="prolog-section" spy={true} smooth={true} duration={500} onClick={() => setActiveMenu('prolog-section')}>
          <OutlinedButton style={{ border: 'none' }}>
            <Typography variant='body2' className={classes.typography} style={activeMenu === 'prolog-section'?{borderBottom: '4px solid #f95215'}:{}}>prolog</Typography>
          </OutlinedButton>
        </Link>
        <Link to="minting-section" spy={true} smooth={true} duration={500} onClick={() => setActiveMenu('minting-section')}>
          <OutlinedButton style={{ border: 'none' }}>
            <Typography variant='body2' className={classes.typography} style={activeMenu === 'minting-section'?{borderBottom: '4px solid #f95215'}:{}}>minting</Typography>
          </OutlinedButton>
        </Link>
        <Link to="roadmap-section" spy={true} smooth={true} duration={500} onClick={() => setActiveMenu('roadmap-section')}>
          <OutlinedButton style={{ border: 'none' }}>
            <Typography variant='body2' className={classes.typography} style={activeMenu === 'roadmap-section'?{borderBottom: '4px solid #f95215'}:{}}>roadmap</Typography>
          </OutlinedButton>
        </Link>
        <OutlinedButton onClick={() => { window.open('https://customrig.medium.com/', '_blank')}} style={{ border: 'none' }}>
          <Typography variant='body2' className={classes.typography}>blog</Typography>
        </OutlinedButton>
      </ListItem>
    </>
  );
};

export default memo(TopAppBarMenu);
