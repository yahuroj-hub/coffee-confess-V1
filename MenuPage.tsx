import { useNavigate } from 'react-router-dom';
import menuImage from "../assets/menu.png";

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start px-6 py-12">
      <div className="w-full max-w-2xl mb-8">
        <button
          onClick={() => navigate('/')}
          className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-white/5 transition-colors"
        >
          ← Back
        </button>
      </div>
      <div className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={menuImage}
          alt="CoffeeConfess Menu"
          className="w-full h-auto"
        />
      </div>
      <p className="text-white/30 text-xs mt-8">CoffeeConfess · Open 8am to 9pm</p>
    </div>
  );
}
