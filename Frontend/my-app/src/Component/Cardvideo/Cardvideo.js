import React from 'react'
import VideoPlayer from "react-video-js-player";
import Container from '@material-ui/core/Container';
import ReactPlayer from "react-player";
import Typography from '@material-ui/core/Typography';

function Cardvideo() {
   
    return (

    <div>

        <Container maxWidth="md">

            <ReactPlayer
            url="https://www.youtube.com/watch?v=fIYr8hbos_4"
            muted={false}
            width="650"
            height="450"
            />

<Typography align="center">
                    If you've lost your password or wish to reset it,
                    enter your email below to get started.
                </Typography>

        </Container>



    </div>
       
    );
};

export default Cardvideo;
