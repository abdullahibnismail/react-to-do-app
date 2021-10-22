import React from 'react'
import { Link } from 'react-router-dom';
import {HeaderStyle} from './HeaderStyle'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';



export default function Header() {
    const classes = HeaderStyle();

    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <AssignmentIcon/>
                        <Typography variant="h6" className={classes.title} >
                            To-Do
                        </Typography>
                        <Link className={classes.linktag} to="/">Home</Link>
                        <Link className={classes.linktag} to="/home">MyToDo</Link>
                        <Link className={classes.linktag} to="/login">Login</Link>
                        <Link className={classes.linktag} to="/signup">SignUp</Link>
                    </Toolbar>
                </AppBar>
            </div>
    )
}





