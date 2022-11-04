import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-500"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
)
);

export default PlayPause;
