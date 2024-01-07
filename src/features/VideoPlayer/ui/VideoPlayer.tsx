import React from 'react';
import ReactPlayer from 'react-player';
import { Paper } from '@mui/material';

interface VideoPlayerProps {
  videoUrl: string | undefined;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => (
  <Paper sx={{ boxShadow: 'none' }}>
    <ReactPlayer
      url={videoUrl}
      width="100%"
      height="100%"
      controls
    />
  </Paper>
);
