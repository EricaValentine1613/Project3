import './App.css';
import SavedSongsPage from './pages/SavedSongsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddSongs } from './components/AddSongs'; 



function App() {
  return (
    
      <BrowserRouter>
      <Header />
       <Routes>
           <Route path="/home" element={<SavedSongsPage />} />
           <Route path="/" element={<SavedSongsPage />} />
           <Route path="ListSongs" element={<SavedSongsPage />} />
           <Route path="/" element={<SavedSongsPage />} />
       </Routes>
     </BrowserRouter>

  );
}

export default App;
