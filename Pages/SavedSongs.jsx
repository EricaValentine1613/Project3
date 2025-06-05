import React, { useState, useEffect } from 'react';

// Helper functions for localStorage
const SAVED_KEY = 'savedSongs';
const REMOVED_KEY = 'removedSongs';

const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

const setToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const SavedSongs = () => {
    const [savedSongs, setSavedSongs] = useState([]);
    const [removedSongs, setRemovedSongs] = useState([]);
    const [showRemoved, setShowRemoved] = useState(false);

    useEffect(() => {
        setSavedSongs(getFromStorage(SAVED_KEY));
        setRemovedSongs(getFromStorage(REMOVED_KEY));
    }, []);

    const handleRemove = (song) => {
        const updatedSaved = savedSongs.filter((s) => s.id !== song.id);
        const updatedRemoved = [song, ...removedSongs];
        setSavedSongs(updatedSaved);
        setRemovedSongs(updatedRemoved);
        setToStorage(SAVED_KEY, updatedSaved);
        setToStorage(REMOVED_KEY, updatedRemoved);
    };

    const handleRestore = (song) => {
        const updatedRemoved = removedSongs.filter((s) => s.id !== song.id);
        const updatedSaved = [song, ...savedSongs];
        setSavedSongs(updatedSaved);
        setRemovedSongs(updatedRemoved);
        setToStorage(SAVED_KEY, updatedSaved);
        setToStorage(REMOVED_KEY, updatedRemoved);
    };

    return (
        <div style={{ padding: 24 }}>
            <h2>{showRemoved ? 'Removed Songs' : 'Saved Songs'}</h2>
            <button onClick={() => setShowRemoved(!showRemoved)}>
                {showRemoved ? 'View Saved Songs' : 'View Removed Songs'}
            </button>
            <ul>
                {(showRemoved ? removedSongs : savedSongs).map((song) => (
                    <li key={song.id} style={{ margin: '12px 0' }}>
                        <strong>{song.title}</strong> by {song.artist}
                        {showRemoved ? (
                            <button style={{ marginLeft: 12 }} onClick={() => handleRestore(song)}>
                                Restore
                            </button>
                        ) : (
                            <button style={{ marginLeft: 12 }} onClick={() => handleRemove(song)}>
                                Remove
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            {((showRemoved ? removedSongs : savedSongs).length === 0) && (
                <p>No songs to display.</p>
            )}
        </div>
    );
};

export default SavedSongs;