import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Donate } from './pages/Donate';
import { AdoptionProcess } from './pages/AdoptionProcess';
import { AnimalDetail } from './pages/AnimalDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Foster } from './pages/Foster';
import { PostAdoption } from './pages/PostAdoption';
import { Login } from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { AnimalProvider } from './context/AnimalContext';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AnimalProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950 font-sans text-stone-800 dark:text-stone-200 transition-colors duration-300 overflow-x-hidden">
              <Navbar />
              <main className="flex-grow overflow-x-hidden">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<About />} />
                  <Route path="/donar" element={<Donate />} />
                  <Route path="/adopta" element={<AdoptionProcess />} />
                  <Route path="/acogida" element={<Foster />} />
                  <Route path="/post-adopcion" element={<PostAdoption />} />
                  <Route path="/animal/:id" element={<AnimalDetail />} />
                  <Route path="/privacidad" element={<PrivacyPolicy />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </AnimalProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;