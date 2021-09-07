import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const url = video.snippet.thumbnails.medium.url;
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item" >
            <img alt={video.snippet.title} className="ui image" src={url} />
            <div classNames="content" >
                <div classNames="bold header" > {video.snippet.title } </div>
            </div>
        </div>
    );
}
export default VideoItem;