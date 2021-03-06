import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((video) => {
        return <VideoItem 
            key={video.id.videoID} 
            onVideoSelect={onVideoSelect} 
            video={video}   
        />
    });

    return (
        <div className="ui relax"> {renderList} </div>
    );
};

export default VideoList;