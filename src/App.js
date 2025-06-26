import './App.css';
import SongsPage from './pages/SongsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddSongs } from './components/AddSongs'; 
import { Contact } from './components/Contact';



function App() {
  return (
    
      <BrowserRouter>
      <Header />
       <Routes>
           <Route path="/home" element={<SongsPage />} />
           <Route path="/" element={<SongsPage />} />
           <Route path="List Songs" element={<SongsPage />} />
           <Route path="Contact" element={<Contact />} />
       </Routes>
     </BrowserRouter>

  );
}

export default App;
