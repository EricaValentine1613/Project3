import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SavedSongs.css';

const SavedSongs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedSongs') || '[]');
        setSongs(saved);
    }, []);

    const removeSong = (idx) => {
        const updated = [...songs];
        updated.splice(idx, 1);
        setSongs(updated);
        localStorage.setItem('savedSongs', JSON.stringify(updated));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '2em' }}>
            <Link to="/song-search" style={{ display: 'inline-block', marginBottom: '1em', color: '#3498db', textDecoration: 'none' }}>
                ← Back to Song Search
            </Link>
            <h1 style={{ color: '#333' }}>Saved Songs</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {songs.length === 0 ? (
                    <li>No saved songs.</li>
                ) : (
                    songs.map((song, idx) => (
                        <li
                            key={idx}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.5em 0',
                                borderBottom: '1px solid #eee'
                            }}
                        >
                            <span>{song.title} by {song.artist}</span>
                            <button
                                onClick={() => removeSong(idx)}
                                style={{
                                    background: '#e74c3c',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '0.3em 0.7em',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SavedSongs;
