import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {withRouter} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
});

const SimpleBreadcrumbs = (props) => {
    const { classes } = props;
    let path = props.location.pathname;
    let bread;
    if (path === '/'){
        bread = <Link component={RouterLink} color='inherit' raised to='/'>HOME /</Link>;
    } else {
        path = path.split('/');
        if (path[path.length - 1] === '') path.pop();
        let a = [''];
        for (let i = 1; i < path.length ; i++) {
            a.push(`${a[i-1]}/${path[i]}`);
        }
        a[0] = '/';
        bread = path.map((item, index) => (
            <Link component={RouterLink} key={item} color='inherit' raised to={`${a[index]}`}>
                {item === '' ? 'HOME' : item.toUpperCase()}
            </Link>
            )
        );
    }

    return (
        <Paper className={classes.paper}>
            <Breadcrumbs aria-label="Breadcrumb">
                {bread}
            </Breadcrumbs>
        </Paper>
    );
};

SimpleBreadcrumbs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SimpleBreadcrumbs));