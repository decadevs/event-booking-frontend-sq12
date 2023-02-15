import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import stled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/Youtube';
import Link from '@material-ui/core/Link';
import "./style.css"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '../../assets/searchIcon.png';
// import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#10375C',
    padding: '1em',
    position: 'relative',
    // right: 0,
    // left: 0,
    bottom: 0,
    display: 'flex',
    height: '40vh',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    margin: theme.spacing(3),
    background: '#FFFFFF',
    color: '#000 !important',
    opacity: '0.64',
    borderRadius: '0.5em',
    width: '100%',
    fontSize: '1em',
    marginLeft: '0',
    // height: '2.5em',
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '20em',
    width: '100%',
    backgroundColor: '#10375C',
    alignItems: 'center',
    '& Grid': {
        height: '100%',
    }
    },
  gridContainer1: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0',
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(2),
  },
  link: {
    color: '#D9DBE1',
    textDecoration: "none",
    backgroundColor: '#10375C',
    "&:hover": {
      color: theme.palette.primary.contrastText,
    }
  },
  hiddenGrid: {
    display: 'none',
  },
  category: {
    position: 'relative',
    color: '#FFFFFF',
    fontSize: '1em',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '1.5em',
    '&:hover ul': {
      display: 'block',
    }
  },
  categoryList: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    backgroundColor: '#10375C',
    left: 0,
    padding: theme.spacing(3),
    zIndex: 1,
    '& li': {
      display: 'block',
      fontSize: '1em',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '1.5em',
      marginBottom: theme.spacing(1),
    }
  },
  '@media (min-width: 768px)': {
    categoryList: {
      display: 'block',
      position: 'static',
      paddingLeft: 0,
    },
  }
}));

const Footer:React.FC = () => {
  const classes = useStyles();
  const Paragraph = styled.p`
    color: #FFF;
    font-size: 1em;
  `

  return (
    <footer className={`${classes.footer} footer_mo`}>
      <Container className={`${classes.gridContainer1}  gridContainer_mo1`} >
        <Grid className={`${classes.gridContainer} gridContainer_mo`} spacing={2}>
          <Grid item xs={12} sm={3} style={{ height: '10em'}}>
            <Typography variant="h6" gutterBottom className={classes.category}>
              Events
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} style={{ height: '10em'}}>
            <Typography variant="h6" gutterBottom className={classes.category}>
                Social media
              <ul className={`${classes.categoryList} ul_categoryList`}>
                <li>
                  <Link className={classes.link} href="#">
                    <FacebookIcon className={classes.icon} />
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    <InstagramIcon className={classes.icon} />
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    <TwitterIcon className={classes.icon} />
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    <YoutubeIcon className={classes.icon} />
                  </Link>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid className='moblie_li_itme' item xs={12} sm={3} style={{ height: '10em'}}>
          <Typography variant="h6" gutterBottom className={classes.category}>
              Company
              <ul className={`${classes.categoryList} ul_categoryList`}>
                <li>
                  <Link className={classes.link} href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid className='moblie_li_itme' item xs={12} sm={3} style={{ height: '10em'}}>
            <Typography variant="h6" gutterBottom className={classes.category}>
              Support
              <ul className={`${classes.categoryList} ul_categoryList`}>
                <li>
                  <Link className={classes.link} href="#">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link className={classes.link} href="#">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid className='moblie_li_itme' item xs={12} sm={3} style={{ height: '10em'}}>
            <Typography variant="h6" gutterBottom className={classes.category}>
              Stay up to date
              <TextField
                className={`${classes.searchInput} searchInput_mo `}
                id="search-input"
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton style={{width: '100%'}}  aria-label="search">
                        {/* <SearchIcon /> */}
                        <img src={SearchIcon} style={{color: '#FF5722'}} alt="search" />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" align="center"  color='textPrimary' component="p">
          <Paragraph>
            {'Copyright © '
            + new Date().getFullYear() + ' '}
            <Link className={classes.link} href="#">
            All rights reserved.
          </Link>
          </Paragraph>
        </Typography>
        <Typography style={{color:"white"}} component={'p'}>
            {/* hello */}
        </Typography>
        {/* <Typography variant="subtitle1" align="center"  style={{ color: "#FFF !important"}} component="p">
          {'Copyright © '
          + new Date().getFullYear() + ' '}
          <Link className={classes.link} href="#">
            All rights reserved.
          </Link>
        </Typography> */}
      </Container>
    </footer>
  );
}
export default Footer;
