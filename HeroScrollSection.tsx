import { ContainerScroll } from "./ui/container-scroll-animation";
import menuImage from "../assets/menu.png";

export default function HeroScrollSection() {
  return (
    <div className="bg-black flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
              Our Confessionals Menu
            </p>
            <h2
              className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Every sip tells <br />
              <em
                className="italic text-white/50"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                a different story.
              </em>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              From our signature espresso to the slow pour sessions — scroll to explore what we pour.
            </p>
          </div>
        }
      >
        <img
          src={menuImage}
          alt="CoffeeConfess Menu"
          className="mx-auto w-full h-auto object-contain rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
