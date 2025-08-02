import { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
  isChefsPick?: boolean;
  isVegan?: boolean;
}

interface MenuSectionProps {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
  bgColor: string;
}

const MenuSection = ({ id, title, emoji, items, bgColor }: MenuSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <section id={id} className={`py-16 bg-${bgColor}/20`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="font-doodle text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className={`w-24 h-1 bg-${bgColor.replace('menu-', '')} mx-auto rounded-full`}></div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;