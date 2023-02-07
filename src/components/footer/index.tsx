import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#10375C',
    padding: '1em',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    height: '26em',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    margin: theme.spacing(3),
    background: '#FFFFFF',
    opacity: '0.2',
    borderRadius: '0.5em',
    width: '100%',
    marginLeft: '0',
    height: '2.5em',
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
    height: 'auto',
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
  '@media (min-width: 600px)': {
    categoryList: {
      display: 'block',
      position: 'static',
      paddingLeft: 0,
    },
  }
}));

const Footer:React.FC = () => {
  const classes = useStyles();

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
                className={`${classes.searchInput} searchInput_mo`}
                id="search-input"
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="search">
                        {/* <SearchIcon /> */}
                        <img src={SearchIcon} alt="search" />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" align="center"  style={{ color: "#FFF !important"}} component="p">
          {'Copyright © '
          + new Date().getFullYear() + ' '}
          <Link className={classes.link} href="#">
            All rights reserved.
          </Link>
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
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// const Footer:React.FC = () => {
//     return (
//         <React.Fragment>
//             <footer className="footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3 col-md-6">
//                             <div className="footer__about">
//                                 <div className="footer__logo">
//                                     <a href="#"><img src="img/logo.png" alt="" /></a>
//                                 </div>
//                                 <p>Events</p>
//                                 <div className="footer__payment">
//                                     <a href="#"><img src="img/payment/payment-1.png" alt="" /></a>
//                                     <a href="#"><img src="img/payment/payment-2.png" alt="" /></a>
//                                     <a href="#"><img src="img/payment/payment-3.png" alt="" /></a>
//                                     <a href="#"><img src="img/payment/payment-4.png" alt="" /></a>
//                                     <a href="#"><img src="img/payment/payment-5.png" alt="" /></a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-2 col-md-3">
//                             <div className="footer__widget">
//                                 <h6>Shopping</h6>
//                                 <ul>
//                                     <li><a href="#">Clothing Store</a></li>
//                                     <li><a href="#">Trending Shoes</a></li> 
//                                     <li><a href="#">Accessories</a></li>
//                                     <li><a href="#">Sale</a></li>
//                                     <li><a href="#">Blogs</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-2 col-md-3">
//                             <div className="footer__widget">
//                                 <h6>Shopping</h6>
//                                 <ul>
//                                     <li><a href="#">Contact Us</a></li>
//                                     <li><a href="#">Payment Methods</a></li>
//                                     <li><a href="#">Delivary</a></li>
//                                     <li><a href="#">Return & Exchanges</a></li>
//                                     <li><a href="#">Shipping</a></li>
//                                     <li><a href="#">Jobs</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-2 col-md-3">
//                             <div className="footer__widget">
//                                 <h6>Shopping</h6>
//                                 <ul>
//                                     <li><a href="#">About Us</a></li>
//                                     <li><a href="#">Our Sitemap</a></li>
//                                     <li><a href="#">In The Press</a></li>
//                                     <li><a href="#">Testimonials</a></li>
//                                     <li><a href="#">Shipping</a></li>
//                                     <li><a href="#">Jobs</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-9">
//                             <div className="footer__newslatter">
//                                 <h6>NEWSLETTER</h6>
//                                 <form action="#">
//                                     <input type="text" placeholder="Email" />
//                                     <button type="submit" className="site-btn">Subscribe</button>
//                                 </form>
//                                 <div className="footer__social">
//                                     <a href="#"><i className="fa fa-facebook"></i></a>
//                                     <a href="#"><i className="fa fa-instagram"></i></a>
//                                     <a href="#"><i className="fa fa-twitter"></i></a>
//                                     <a href="#"><i className="fa fa-pinterest"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//         </React.Fragment>
//     )
//     }
// export default Footer;
