import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
     marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    }

}))

function PostCard({ post }) {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader 
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                    <Typography>
                        {'Avaliado por'}
                    </Typography>
                    <Typography variant="subtitle2">
                        {post.author.name}
                    </Typography>
                    <Typography variant="caption">
                        {post.date}
                    </Typography>
                    </div> 
                }
            />
                <CardActions>

                </CardActions>
            
        </Card>
    )
}

export default PostCard