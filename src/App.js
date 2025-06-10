
import './App.css';
import SavedSongsPage from './pages/SavedSongsPage';
import AddSongs from './components/AddSongs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    
      <BrowserRouter>
       <Routes>
           <Route path="/home" element={<SavedSongsPage />} />
       </Routes>
     </BrowserRouter>

  );
}

export default App;
