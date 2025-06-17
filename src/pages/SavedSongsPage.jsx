import React, { useState } from 'react'
import ListSongs from '../components/ListSongs'
import AddSongs from '../components/AddSongs'

export default function SavedSongsPage() {
const [songs, setSongs] = useState ([
        { id: 1, title: "Shape of You", artist: "Ed Sheeran" },
        { id: 2, title: "Blinding Lights", artist: "The Weeknd" },
        { id: 3, title: "Levitating", artist: "Dua Lipa" },
    ]);
  
   return (
    <>
        <h1>Main Page for Songs</h1>
        <p>Here you can view and manage your saved songs.</p>
        <ListSongs songs={songs} setSongs={setSongs} />
        <AddSongs songs={songs} setSongs={setSongs} />
    </>
 
  )
}
