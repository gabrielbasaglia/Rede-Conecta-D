import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, ListItem, ListItemText, ListSubheader, Paper } from '@material-ui/core';
import { padding } from '@mui/system';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        margin: theme.spacing(2),
    },
    Button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'reactjs' },
    { id: 2, name: 'javascripit' },
    { id: 3, name: 'dotnet' },
    { id: 4, name: 'php' },
    { id: 5, name: 'materialdesign' },
    { id: 6, name: 'webdev' },
   
]

function NavBar() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.Button} >Registrar Gratis</Button>
            <ListSubheader>Tags em Alta</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
             <ListItem button>Exibir mais Tags</ListItem>

        </Paper>
    )
}   
export default NavBar;