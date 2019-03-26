import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import CarsDB from '../../data/car';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = ({
    table: {
        maxWidth: '90%',
    },
    card: {
        minWidth: 275,
        maxWidth: 600,
        marginTop: 10,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 200,
        width: 200,
        margin: 'auto',
    },
});

const CarDetailPage = (props) => {
    const id = props.itemId;
    console.log(CarsDB[id]);
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    const label = Object.keys(CarsDB[id]).slice(4, 14);
    const units = ['l', 'HP', '', '', 'kg', 'mm', 'mm', 'mm', 'l', 'l'];
    return (
        <Card className={classes.card}>
            <CardContent>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <CardMedia
                                    className={classes.media}
                                    image={require("../../data/react.png")}
                                    title="React"
                                />
                            </TableCell>
                            <TableCell align="left">
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {CarsDB[id].Year}{bull}{CarsDB[id].Engine}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {CarsDB[id].Brand} {CarsDB[id].Model}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {CarsDB[id].Class}
                                </Typography>
                                <Typography component="p">
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {label.map((item, index) => (
                            <TableRow key={item}>
                                <TableCell component="th" scope="row">
                                    {item}
                                </TableCell>
                                <TableCell align="right">{CarsDB[id][item]} {units[index]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <CardActions>
                    <Button component={Link} size="small" raised to='/car'>Back</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

CarDetailPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(CarDetailPage));