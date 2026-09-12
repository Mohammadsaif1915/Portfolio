import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

// audioRef and show are passed from App.jsx
const MusicPlayer = ({ audioRef, show }) => {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !muted;
    setMuted(newMuted);

    if (newMuted) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1.0;
      // Re-attempt play in case it was blocked previously
      audioRef.current.play().catch(e => console.warn('Play failed:', e));
    }
  };

  if (!show) return null;

  return (
    <div className={`music-player${muted ? ' muted' : ''}`}>
      <div className="music-bars">
        <span /><span /><span /><span />
      </div>
      <span>{muted ? 'muted' : 'MDS'}</span>
      <button className="music-toggle-btn" onClick={toggleMute} aria-label="Toggle sound">
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default MusicPlayer;
