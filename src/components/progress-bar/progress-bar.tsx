'use client';

import React, { useEffect, useState } from 'react';
import './progress-bar.css';

interface ProgressBarProps {
  progress: number;
  limit: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, limit }) => {
  return (
    <>
    <div className='progress-bar'>
      <svg className='progress-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)', transform: '', msFilter: '' }}>
        <path d="M20 10V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-4h-2zM9 17l2-3.89L7 12l6-5-1 3.89L16 12l-7 5z"></path>
      </svg>
      <p className="limit_clicks">{progress}/{limit}</p>
      <div
           className="progress-bar-inner"
           style={{ width: `${(progress / 6000) * 100}%` }}
         ></div>
    </div>
    </>
  );
};

export default ProgressBar;