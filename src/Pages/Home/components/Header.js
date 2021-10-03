import React from 'react'

import { SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';
import { makeStyles } from '@material-ui/styles';
import { 
    AppBar, 
    Button, 
    Toolbar,
    Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    AppBar: {
        boxShadow: 'none',
    },

    img: {
        maxHeight: 55,
    },
    flexGrow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10,
    }


});

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.AppBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.flexGrow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}>novo post</Button>
                <SvgIcon className={classes.bell}>
                    <Bell></Bell>
                </SvgIcon>
                <Avatar alt="Remy Sharp" src="" />
                </div>
                {/*<div>
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img2</span>
                </div>*/}
            </Toolbar>
        </AppBar>
    )
}
export default Header;