import React from 'react';
import videoSrc from '../assets/testVideo.mp4';
import "../styles/VideoBackground.css"

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;