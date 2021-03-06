//
//

import React from 'react';
import '../styles/RecommendedVideos.css';

import VideoCards from './VideoCards';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCards />
      </div>
    </div>
  );
}

export default RecommendedVideos;
