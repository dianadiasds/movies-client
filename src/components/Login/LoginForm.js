import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function LoginForm(props) {
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
    return (<Container maxWidth="sm">
        <Typography variant="h6"  gutterBottom>
            Login
        </Typography>
        <Paper className={classes.root}>

        <form className={classes.container}  autoComplete="off" onSubmit={props.onSubmit}>
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={props.name}
                onChange={props.onChange}
                margin="normal"
            />
            <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                value={props.password}
                onChange={props.onChange}
                type="password"
                autoComplete="current-password"
                margin="normal"
            />

            <Button variant="outlined" className={classes.button} type='submit' color="primary">
                Submit
            </Button>
        </form></Paper></Container>)
}
