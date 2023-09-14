import React from 'react';


const BackgroundVideo = () => {
  return (
    <div className="bgVid">
      <video autoPlay loop muted>
        <source src='/colorBgVid.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;