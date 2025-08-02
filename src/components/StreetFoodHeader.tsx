import { useState, useEffect } from 'react';
import chefDoodle from '@/assets/chef-doodle.png';
import decorationDoodles from '@/assets/decoration-doodles.png';

const HotelMenuHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating decoration doodles */}
      <div className={`absolute top-10 left-10 w-20 h-20 opacity-30 transition-all duration-1000 ${isVisible ? 'animate-bounce' : 'translate-y-10 opacity-0'}`}>
        <img src={decorationDoodles} alt="Decorative doodles" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-20 right-16 w-16 h-16 opacity-20 transition-all duration-1500 ${isVisible ? 'animate-pulse' : 'translate-y-10 opacity-0'}`}>
        <img src={decorationDoodles} alt="Decorative doodles" className="w-full h-full object-contain rotate-45" />
      </div>
      <div className={`absolute bottom-20 left-20 w-24 h-24 opacity-25 transition-all duration-2000 ${isVisible ? 'animate-bounce' : 'translate-y-10 opacity-0'}`}>
        <img src={decorationDoodles} alt="Decorative doodles" className="w-full h-full object-contain -rotate-12" />
      </div>

      {/* Main content */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Chef doodle */}
        <div className={`mb-8 flex justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <img src={chefDoodle} alt="Friendly chef" className="w-32 h-32 md:w-40 md:h-40" />
        </div>

        {/* Title */}
        <h1 className={`font-doodle text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Street Food Paradise
        </h1>

        {/* Subtitle */}
        <p className={`font-doodle text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Authentic flavors, street-side fresh!
        </p>

        {/* Scroll indicator */}
        <div className={`animate-bounce transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-foreground rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          <p className="font-doodle text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </header>
  );
};

export default HotelMenuHeader;