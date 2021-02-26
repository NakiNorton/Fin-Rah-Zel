import React from 'react';
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root} style={{ color: "#5387bb" }}>
      <AppBar position="fixed" className={classes.color} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar>

        <div className="mobile-menu">
          <MenuIcon color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} fontSize="large" />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to='landing-page' activeClass="active" spy={true} smooth={true}>
                  <h2 className="nav-logo">Fin Rah Zel</h2>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to='about' activeClass="active" spy={true} smooth={true}>About</Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to='music' activeClass="active" spy={true} smooth={true}>Music</Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to='upcoming-gigs' activeClass="active" spy={true} smooth={true} >Upcoming Gigs</Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link to='contact' activeClass="active" spy={true} smooth={true} >Contact</Link>
            </MenuItem>
          </Menu>
        </div>
    
        <section className="nav-container">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to='landing-page' activeClass="active" spy={true} smooth={true}>
                  <h2 className="nav-logo">Fin Rah Zel</h2>
              </Link>
            </li>
            <li className="nav-link">
              <Link to='about' activeClass="active" spy={true} smooth={true}>About</Link>
            </li>
            <li className="nav-link">
              <Link to='music' activeClass="active" spy={true} smooth={true}>Music</Link>
            </li>
            <li className="nav-link">
              <Link to='upcoming-gigs' activeClass="active" spy={true} smooth={true} >Upcoming Gigs</Link>
            </li>
            <li className="nav-link">
              <Link to='contact' activeClass="active" spy={true} smooth={true} >Contact</Link>
            </li>
          </ul>
        </section>

          <div className="s-media-container">

            <a href="https://www.facebook.com/FinRahZel">
              <i className="s-media-icon" style={{ color: "black" }}>
                <FacebookIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://www.instagram.com/finrahzel/?hl=en">
              <i className="s-media-icon" style={{ color: "black"  }}>
              <InstagramIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://www.youtube.com/channel/UC2IwDrBMMbk0Ux0844IuEBA">
              <i className="s-media-icon" style={{ color: "black"  }}>
              <YouTubeIcon fontSize="inherit" color='inherit' />
              </i>
            </a>

            <a href="https://open.spotify.com/artist/2LHIjyp5jNwOU2bJftD6K3">
              <i className="s-media-icon" style={{ color: "black" }}>
                <FontAwesomeIcon icon={['fab', 'spotify']} />
              </i>
            </a>

          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default NavBar;