import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: 100,
    },
    appbar: {
        margin: 'auto',
        flexDirection: 'row'
    }
});

const Header = (props) => {
  const { classes } = props;
  return (
        <AppBar position="static" className={classes.appbar}>
            <Button component={Link} variant="contained" color="primary" raised to="/" className={classes.button}>
                Car DB
            </Button>
            <Button component={Link} variant="contained"  raised to="/car" className={classes.button}>
                Car List
            </Button>
            <Button component={Link} variant="contained"  raised to="/about" className={classes.button}>
                About
            </Button>
        </AppBar>
  );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);