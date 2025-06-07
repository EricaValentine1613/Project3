import React, { useState } from 'react';
import ContactPage from './ContactPage.jsx';
import SavedSongs from './SavedSongs.jsx';

const apiKey = process.env.AIzaSyD4hyFXrPw3i4jgNmNy46RgRZxwea8xI-c;
const searchSongs = async (query) => {
    // Example static data, replace with API results
    const songs = [
        { id: 1, title: 'Unsainted', artist: 'Slipknot' },
        { id: 2, title: 'I Need You', artist: 'Lynyrd Skynyrd' },
        { id: 3, title: 'Nothing Else Matters', artist: 'Metallica' },
    ];
    return songs.filter(
        (song) =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase())
    );
};

const SongSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [savedSongs, setSavedSongs] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === '') return;
        const found = await searchSongs(query);
        setResults(found);
    };

    const handleSave = (song) => {
        if (!savedSongs.some((s) => s.id === song.id)) {
            setSavedSongs([...savedSongs, song]);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
            <h2>Song Search</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    placeholder="Search for a song or artist..."
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ width: '70%', padding: 8 }}
                />
                <button type="submit" style={{ padding: 8, marginLeft: 8 }}>
                    Search
                </button>
            </form>
            <div style={{ marginTop: 24 }}>
                <h3>Results</h3>
                {results.length === 0 && <p>No results found.</p>}
                <ul>
                    {results.map((song) => (
                        <li key={song.id} style={{ marginBottom: 8 }}>
                            <strong>{song.title}</strong> by {song.artist}
                            <button
                                style={{ marginLeft: 12 }}
                                onClick={() => handleSave(song)}
                                disabled={savedSongs.some((s) => s.id === song.id)}
                            >
                                {savedSongs.some((s) => s.id === song.id) ? 'Saved' : 'Save'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ marginTop: 24 }}>
                <h3>Saved Songs</h3>
                {savedSongs.length === 0 && <p>No songs saved yet.</p>}
                <ul>
                    {savedSongs.map((song) => (
                        <li key={song.id}>
                            <strong>{song.title}</strong> by {song.artist}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SongSearch;