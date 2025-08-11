import { useState, useEffect } from 'react';
import { Coffee, Utensils, Moon, IceCream, Star, Soup, CookingPot, UtensilsCrossed } from 'lucide-react';

interface MenuNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const MenuNavigation = ({ activeSection, onNavigate }: MenuNavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const menuCategories = [
    { id: 'wagon_special', name: `Wagon's Special`, icon: Star, color: 'menu-wagon-special' },
    { id: 'starter', name: 'Starters', icon: Utensils, color: 'menu-lunch' },
    { id: 'fried_rice', name: 'Fried Rice', icon: CookingPot, color: 'menu-lunch' },
    { id: 'roll', name: 'Rolls', icon: Utensils, color: 'menu-dinner' },
    { id: 'noodles', name: 'Noodles', icon: UtensilsCrossed, color: 'menu-lunch' },
    { id: 'soup', name: 'Soup', icon: Soup, color: 'menu-soup' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border transition-all duration-300 ${isSticky ? 'shadow-soft' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeSection === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleNavClick(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full font-doodle font-medium whitespace-nowrap transition-all duration-300 min-w-fit ${
                  isActive
                    ? `bg-${category.color} text-foreground shadow-hover scale-105`
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-105'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;