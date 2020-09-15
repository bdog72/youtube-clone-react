//
//

import React from 'react';
import '../styles/VideoCard.css';

import { Avatar } from '@material-ui/core';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumbnail' src={channelImage} alt='' />
      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' alt={channel} src={image} />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} - {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
