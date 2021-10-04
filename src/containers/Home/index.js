import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Element } from 'react-scroll';

import Section from 'hoc/Section';
import Prolog from './Prolog';
import SectionAlternate from 'hoc/SectionAlternate';
import Customization from './Customization';
import Customrig from './Customrig';
import Roadmap from './Roadmap';
import Conquest from './Conquest';
import Traits from './Traits';
import urlSource from 'ipfs-utils/src/files/url-source';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  roadmap: {
    width: '100%', 
    backgroundImage: "url('assets/images/roadmap_back.png')", 
    backgroundPosition: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();

  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <div className={classes.root}>
      <SectionAlternate style={{width: '100%'}}>
        <Customization />
      </SectionAlternate>
      <Element name="prolog-section">
        <Section>
          <Prolog />
        </Section>
      </Element>
      <Element name="minting-section">
        <Section>
          <Customrig />
        </Section>
      </Element>
      {/* <Element>
      <Section>
        <Traits />
      </Section>
      </Element>
      <Element name="">
      <SectionAlternate>
        <Conquest />
      </SectionAlternate>
      </Element> */}
      <Element name="roadmap-section" className={classes.roadmap}>
        <Section >
          <Roadmap />
        </Section>
      </Element>
    </div >
  );
};

export default Home;
