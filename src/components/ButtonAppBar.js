import React from 'react';
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Shadows Into Light, cursive',
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ color: "#5387bb" }}>
      <AppBar position="fixed" className={classes.color} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar>
        <div className="mobile-menu">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
    
        <section className="nav-container">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to='landing-page' activeClass="active" spy={true} smooth={true}>
                <h2 className="sml-h2 nav-head">Fin Rah Zel</h2>
              </Link>
            </li>
            <li className="nav-link">
              <Link to='about' activeClass="active" spy={true} smooth={true}>About</Link>
            </li>
            <li className="nav-link">
              <Link to='music-container' activeClass="active" spy={true} smooth={true}>Music</Link>
            </li>
            <li className="nav-link">
              <Link to='upcoming-dates' activeClass="active" spy={true} smooth={true} >Upcoming Dates</Link>
            </li>
            <li className="nav-link">
              <Link to='contact' activeClass="active" spy={true} smooth={true} >Contact</Link>
            </li>
          </ul>
        </section>

          <div className="s-media-container">

            <a href="https://www.facebook.com/FinRahZel">
              <i className="sm-icon" style={{ color: "black" }}>
                <FacebookIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://www.instagram.com/finrahzel/?hl=en">
              <i className="sm-icon" style={{ color: "black"  }}>
              <InstagramIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://www.youtube.com/channel/UC2IwDrBMMbk0Ux0844IuEBA">
              <i className="sm-icon" style={{ color: "black"  }}>
              <YouTubeIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://open.spotify.com/artist/2LHIjyp5jNwOU2bJftD6K3">
              <i className="sm-icon" style={{ color: "black" }}>
                <FontAwesomeIcon icon={['fab', 'spotify']} />
              </i>
            </a>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;