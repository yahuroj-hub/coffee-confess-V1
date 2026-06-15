import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MenuPage from './pages/MenuPage';
import AboutSection from './components/AboutSection';
import HeroScrollSection from './components/HeroScrollSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Index />
      <AboutSection />
      <HeroScrollSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
