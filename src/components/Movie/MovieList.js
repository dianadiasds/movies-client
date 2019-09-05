import * as React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';



import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: 10,
    },
    card: {

        maxWidth: 300,
        margin: 5
    },
}));
export default function MovieList(props) {
    const {movielist} = props;
    const classes = useStyles();


    return  (
        <Grid container spacing={4} className={classes.grid}>

            {movielist.map(movie => (
                <Card className={classes.card}>
            <CardActionArea key={movie.title}>
                <Link to={`/movies/${movie.id}`}>
                <CardMedia
                    component="img"
                    height="500"
                    image={movie.picture}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.title}
                    </Typography>
                </CardContent></Link>
            </CardActionArea>  </Card>))}
      </Grid>
    );
}

