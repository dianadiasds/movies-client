import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


export default function CreateComment(props) {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 500,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
        paper: {
            padding: 10
        },
        root: {
            width: '100%',
            maxWidth: 400,
            padding: 20
        },
    }));
    const classes = useStyles();
    return(<Container maxWidth="sm">
        <Typography variant="h6"  gutterBottom>
            Add comment
        </Typography>
        <Paper className={classes.root}>

            <form className={classes.container}  autoComplete="off" onSubmit={props.onSubmit}>
                <TextField
                    id="standard-name"
                    label="Create a comment"
                    className={classes.textField}
                    value={props.comment}
                    onChange={props.onChange}
                    name='comment'
                    placeholder='Your comment'
                />

                <Button variant="outlined" className={classes.button} type='submit' color="primary">
                    Submit
                </Button>
            </form></Paper></Container>)
}
