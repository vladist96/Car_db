import React from 'react';
import CarsDB from '../../data/car';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const styles = {
    nav: {
        maxWidth: 600,
        backgroundColor: '#fff',
        marginTop: 10
    }
};

const ListItemLink = props => <ListItem button component="a" {...props} />;

const CarsPage = (props) => {
    const { classes } = props;
    const list = Object.keys(CarsDB).map( item => {
        return (
            <>
                <ListItemLink component={Link} raised to={`/car/${item}`}>
                    <ListItemText>
                        {item}. {CarsDB[item].Brand} {CarsDB[item].Model} {CarsDB[item].Year}
                    </ListItemText>
                </ListItemLink>
                <Divider />
            </>
    )
    });
    return (
        <Paper className={classes.nav}>
            <List component="nav" >
               {list}
            </List>
        </Paper>
    );
};

CarsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarsPage);