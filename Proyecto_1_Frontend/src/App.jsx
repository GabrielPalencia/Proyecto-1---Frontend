import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Explore from './views/Explore';
import Details from './views/Details';
import Favorites from './views/Favorites';
import About from './views/About';
import NotFound from './views/Not-Found';



function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const isFav = favorites.some(fav => fav.id === item.id);
    if (isFav) {
      setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar favoriteCount={favorites.length} />
         
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/item/:id" element={<Details toggleFavorite={toggleFavorite} favorites={favorites} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;