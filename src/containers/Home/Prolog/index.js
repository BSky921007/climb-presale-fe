import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      marginBottom: 60
    },
  },
  mobileImageContainer: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute', left: 0, marginTop: 80,
    },
    position: 'absolute', right: 0, marginTop: 80,
  },
  buyMarsButton: {
    backgroundColor: theme.palette.error.light
  }, 
  about: {
    background: "radial-gradient(circle at top center,#000000 0%,#bb2b28 0%,#000000 91%)", 
  }
}));

const Prolog = props => {
  const { setIsSwapDialog, account, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
      <div id='prologue' className={clsx(classes.root, className)} {...rest}>
        <Grid
          container
          justifyContent="space-between"
          spacing={4}
          direction={isMd ? 'row' : 'column-reverse'}
          className={classes.about}
        >
          <Grid
            item
            container
            alignItems="center"
            xs={9}
            md={4}
            data-aos={'fade-up'}
          >
            <SectionHeader
              title={
                <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'LEXIO' }}>
                  <span style={{ color: theme.palette.text.hoverText }}>
                    ABOUT
                    <br />
                  </span>
                  <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                    Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
                    <br />
                    <br />
                  </span>
                  <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                    Months turned to years, and then to centuries and after, eons until at last, these subjugated canines mustered up the courage and led a rebellion against their captors. For what seemed like an eternity, these dogs were locked in a war of attrition on that barren moon until at last, they struck a decisive blow against their abductors during the siege of Canis Maria.
                    <br />
                    <br />
                  </span>
                  <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                    This victory turned the tides in their favor and on they went breaking one alien stronghold after another. At last, they broke through the gates of the fortified encampment at Phora Heights and sealed their victory, awash in the blood of 10,000 of their former captors.
                    <br />
                    <br />
                  </span>
                </div>
              }
              style={{margin: '120px'}}
              align={isMd ? "left" : 'center'}
              disableGutter
              titleVariant="h3"
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-start"
            alignItems="center"
            xs={15}
            md={8}
            data-aos={'fade-up'}
          >
            <Image
              src="assets/images/2.png"
              alt="Web3 Legal Engineering"
              className={classes.image}
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              // style={{width: '50px', height: '50px'}}
            />
          </Grid>
        </Grid>
      </div>
  );
};

Prolog.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Prolog;
