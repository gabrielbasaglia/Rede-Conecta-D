import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard/index';
import { ThemeContext } from '@mui/styled-engine';


const useStyles = makeStyles(() => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Gabriel Basaglia',
            username: 'gabrielbasaglia',
            avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: "Criando um App do zero utilizando React.js",
    date: "April 7, 2020",
    description: 'Fala pessoal! QUal o framework favorito de vcs?',
    hashtags: "#dotmet, #javascript, #reactjs, #developer",
    image: "/images/posts/post9.jpg"
},
{
    id: 2,
        author: { 
            id: 1,
            name: 'Gabriel Basaglia',
            username: 'gabrielbasaglia',
            avatar: '/images/avatars/avatar_1.jpeg'
    },
    title: "Comparativo entre React.ja e Vue.js - Performance",
    date: "April 1, 2020",
    description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vcs! Quem topa?',
    hashtags:"#framework, #javascript, #reactjs, #Vue.js",
    image: "/images/posts/post8.png"

} 
 
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={''}>
            
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }

        </div>
    )
}
export default Feed;