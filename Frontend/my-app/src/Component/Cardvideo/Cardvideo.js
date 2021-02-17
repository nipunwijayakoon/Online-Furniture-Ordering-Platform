import React from 'react'
import VideoPlayer from "react-video-js-player";
import Container from '@material-ui/core/Container';
import ReactPlayer from "react-player";
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

        </Container>



    </div>
       
    );
};

export default Cardvideo;
