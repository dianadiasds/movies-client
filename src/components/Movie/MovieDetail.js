import React from 'react';
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: 10,

    },
    image: {

        height: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    card: {
        marginTop: 10,
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
}));


export default function MovieDetail(props) {
    const classes = useStyles();
    const { comments, movie} = props;
    const items = comments
        .map(comment => {
            return (
                <Card className={classes.card} key={comment.id}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
            {comment['user.name']}
            </Typography>
            <Typography variant="h5" component="h2">
                {comment.comment}
            </Typography>
            </CardContent>
            </Card>)

        });
    if ( movie ) {
       console.log(movie.title)
    }


    return(
        <div>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={movie.title} src={movie.picture} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {movie.synopsis}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {movie.director}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                           <Link to={`/comment/${movie.id}`}>create comment</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{movie.yearOfRelease}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </div>
            {items}
        </div>
    );
}
