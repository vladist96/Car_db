import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 500,
        marginTop: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const AboutPage = (props) => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    info
                </Typography>
                <Typography variant="h4" component="h2">
                    Vlad Bilykh
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Junior Frontend-dev
                </Typography>
                <Typography component="p">
                    <i className="fas fa-map-marker-alt"></i>
                    {`  `}Dnipro, Ukraine
                </Typography>
                <Typography component="p">
                    <table>
                        <tr>
                            <td><i className="fas fa-at"></i></td>
                            <td>vlb3lykh@gmail.com </td>
                        </tr>
                        <tr>
                            <td><i className="fab fa-skype"></i></td>
                            <td><a href="skype:vladist96?chat">vladist96</a></td>
                        </tr>
                        <tr>
                            <td><i className="fab fa-linkedin-in"></i></td>
                            <td><a href="http://www.linkedin.com/in/vladist" target="_blank" rel="noopener noreferrer">LinkedIn</a></td>
                        </tr>
                        <tr>
                            <td><i className="fab fa-github"></i></td>
                            <td><a href="http://www.github.com/vladist96" target="_blank" rel="noopener noreferrer">Github</a></td>
                        </tr>
                    </table>
                </Typography>
                <Typography component="p">
                    <table>
                        <td>
                            <i className="fas fa-phone"></i>
                        </td>
                        <td>
                            <tr>
                                <a href="tel:+380965476299">+380 (96) 54-76-299</a> <br/>
                                <a href="tel:+380990805316">+380 (99) 08-05-316</a>
                            </tr>
                        </td>
                    </table>
                </Typography>
            </CardContent>
        </Card>
    );
};

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);