import React, {useState} from 'react'

export default function ListSongs({songs,setSongs}) {
   
    const removeSong = (idx) => {
        const updated = [...songs];
        updated.splice(idx, 1);
        setSongs(updated);
        localStorage.setItem('savedSongs', JSON.stringify(updated));
    };


  return (
    <>
        <h1>Saved Songs</h1>
        {songs.map ((song,idx)=>(
            <p>{song.title} {song.artist}
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
            </p >                    
          ))}
    </>
  
  )
}
  
  
  
  