//
//

import React from 'react';
// import { videoCardAvatarImage, videoCardChannelImage } from '../links';

import '../styles/RecommendedVideos.css';
import VideoCardRepeats from './VideoCardRepeats';
// import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCardRepeats />
      </div>
    </div>
  );
}

export default RecommendedVideos;
