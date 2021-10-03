import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Box from '@mui/system/Box';

//import './style.css'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolBar: {
        height: 64
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolBar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display='flex'>
                        <NavBar />
                        <Feed />
                    </Box>

                </Container>
            </main>
        </div>

    );
}

export default Home;