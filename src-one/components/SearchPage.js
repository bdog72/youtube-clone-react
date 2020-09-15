//
//

import React from 'react';
import '../styles/SearchPage.css';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

import { videoCardAvatarImage, videoCardChannelImage } from '../links';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        channel='bozo channel'
        verified
        subs='777k'
        noOfVideos={200}
        image={videoCardAvatarImage}
        description='awesome programming'
      />
      <hr />
      <VideoRow
        views='1.4m'
        subs='125k'
        description='Online Training'
        timestamp='59 seconds ago'
        channel='Clever Bozo'
        title='Online Coding Practice'
        image={videoCardChannelImage}
      />
      <VideoRow
        views='1.4m'
        subs='125k'
        description='Online Training'
        timestamp='59 seconds ago'
        channel='Clever Bozo'
        title='Online Coding Practice'
        image={videoCardChannelImage}
      />
      <VideoRow
        views='1.4m'
        subs='125k'
        description='Online Training'
        timestamp='59 seconds ago'
        channel='Clever Bozo'
        title='Online Coding Practice'
        image={videoCardChannelImage}
      />
      <VideoRow
        views='1.4m'
        subs='125k'
        description='Online Training'
        timestamp='59 seconds ago'
        channel='Clever Bozo'
        title='Online Coding Practice'
        image={videoCardChannelImage}
      />
    </div>
  );
}

export default SearchPage;
