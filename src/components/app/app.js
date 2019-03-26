import React, { Component } from 'react';

import Header from '../header';
import { CarsPage, CarDetailPage, AboutPage } from '../pages';

import './app.css';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SimpleBreadcrumbs from '../breadcrumbs';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: '100vh',
    },
    griditem: {
        margin: 'auto',
    },
    page: {
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
    },
    button: {
        margin: theme.spacing.unit,
        width: 100,
    },
});

class App extends Component {
  render() {
      const { classes } = this.props;
    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item sm={8} align="center" className={classes.griditem}>
                        <Paper className={classes.page}>
                            <Header/>
                            <SimpleBreadcrumbs/>
                            <Switch>
                                <Route exact path='/'
                                       render={() => {
                                           return (
                                               <>
                                                   <h2>Welcome!</h2>
                                                   <Button component={Link} variant="contained" color="primary" raised to="/car" className={classes.button}>
                                                       Car List
                                                   </Button>
                                                   <Button component={Link} variant="contained" color="primary" raised to="/about" className={classes.button}>
                                                       About
                                                   </Button>
                                                </>
                                       )}}/>
                                <Route path='/about' component={AboutPage}/>
                                <Route exact path='/car' component={CarsPage}/>
                                <Route path='/car/:id'
                                     render={({ match }) => {
                                         const { id } = match.params;
                                         return <CarDetailPage itemId={id} />
                                     }}/>
                                <Redirect to='/'/>
                            </Switch>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Router>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);