//
//

import React from 'react';
import '../styles/SearchPage.css';

import { TuneOutlined } from '@material-ui/icons';
import ChannelRow from './ChannelRow';
import { searchPageAvatarImage } from '../links/SearchPage_Links';
import VideoRow from './VideoRow';
import { videoCardThumbnailImage1 } from '../links/VideoCards_Links';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={searchPageAvatarImage}
        channel='Front End Channel'
        verified
        subs='100k'
        noOfVideos={200}
        description='Cool Programming Channel. Everyhting about Front End Web Development'
      />
      <hr />
      <VideoRow
        views='1.4m'
        subs='659k'
        description='Free training on React with the new React Hooks'
        timestamp='5 hours ago'
        channel='Cool Programming Channel'
        title='React Hooks'
        image={videoCardThumbnailImage1}
      />
    </div>
  );
}

export default SearchPage;
