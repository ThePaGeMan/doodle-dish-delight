import { useState, useEffect } from 'react';
import StreetFoodHeader from '@/components/StreetFoodHeader';
import MenuNavigation from '@/components/MenuNavigation';
import MenuSection from '@/components/MenuSection';
import OrderButton from '@/components/OrderButton';
import MenuFooter from '@/components/MenuFooter';
import { menuData } from '@/data/menuData';

const Index = () => {
  const [activeSection, setActiveSection] = useState('lunch');

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all menu sections
    const sections = ['lunch', 'dinner', 'soup'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-background font-doodle">
      {/* Header */}
      <StreetFoodHeader />

      {/* Navigation */}
      <MenuNavigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Menu Sections */}
      <MenuSection
        id="lunch"
        title="Fast Food & Chinese"
        emoji="🥡"
        items={menuData.lunch}
        bgColor="menu-lunch"
      />

      <MenuSection
        id="dinner"
        title="Dinner Specials"
        emoji="🍜"
        items={menuData.dinner}
        bgColor="menu-dinner"
      />

      <MenuSection
        id="soup"
        title="Soups"
        emoji="🍲"
        items={menuData.soup}
        bgColor="menu-soup"
      />

      {/* Footer */}
      <MenuFooter />

      {/* Floating Order Button */}
      <OrderButton />
    </div>
  );
};

export default Index;
