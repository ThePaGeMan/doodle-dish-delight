import { useState, useEffect } from 'react';
import { Coffee, Utensils, Moon, IceCream, Wine } from 'lucide-react';

interface MenuNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const MenuNavigation = ({ activeSection, onNavigate }: MenuNavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const menuCategories = [
    { id: 'lunch', name: 'Lunch', icon: Utensils, color: 'menu-lunch' },
    { id: 'dinner', name: 'Dinner', icon: Moon, color: 'menu-dinner' },
    { id: 'soup', name: 'Soup', icon: Coffee, color: 'menu-soup' },
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