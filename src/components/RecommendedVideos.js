//
//

import React from 'react';
import '../styles/RecommendedVideos.css';

import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
