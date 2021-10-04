
import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import CircleButton from 'components/UI/Buttons/CircleButton';

import Logo from 'components/Logo';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1)
    },
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  height: {
    height: '100%'
  },
  circlebutton: {
    display: 'flex', 
    backgroundColor: '#000', 
    marginRight: 40, 
    marginTop: 35,
    marginBottom: 35, 
    marginLeft: 60, 
    '&:hover': {
      backgroundColor: '#000'
    },
  }
}));

const LogoWithTitle = ({ history, titleVariant, className }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const onClickHandler = () => {
    history.push(PAGES.HOME.url);
  }

  return (
    <div className={clsx(classes.root, className)}>
      <CircleButton className={classes.circlebutton} onClick={onClickHandler} icon={<Logo />} />
      {/* <Typography color='textPrimary' style = {{ fontFamily: 'LULO'}} variant={'body1'}>
        {isMd && 'CUSTOMRIG'}
      </Typography> */}
    </div>
  );
};

export default withRouter(LogoWithTitle);
