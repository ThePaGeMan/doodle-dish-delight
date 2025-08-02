import { useState, useEffect } from 'react';
import HotelMenuHeader from '@/components/HotelMenuHeader';
import MenuNavigation from '@/components/MenuNavigation';
import MenuSection from '@/components/MenuSection';
import OrderButton from '@/components/OrderButton';
import MenuFooter from '@/components/MenuFooter';
import { menuData } from '@/data/menuData';

const Index = () => {
  const [activeSection, setActiveSection] = useState('breakfast');

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
    const sections = ['breakfast', 'lunch', 'dinner', 'desserts', 'drinks'];
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
      <HotelMenuHeader />

      {/* Navigation */}
      <MenuNavigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Menu Sections */}
      <MenuSection
        id="breakfast"
        title="Breakfast"
        emoji="🌅"
        items={menuData.breakfast}
        bgColor="menu-breakfast"
      />

      <MenuSection
        id="lunch"
        title="Lunch"
        emoji="🥗"
        items={menuData.lunch}
        bgColor="menu-lunch"
      />

      <MenuSection
        id="dinner"
        title="Dinner"
        emoji="🌙"
        items={menuData.dinner}
        bgColor="menu-dinner"
      />

      <MenuSection
        id="desserts"
        title="Desserts"
        emoji="🍰"
        items={menuData.desserts}
        bgColor="menu-dessert"
      />

      <MenuSection
        id="drinks"
        title="Drinks"
        emoji="🍹"
        items={menuData.drinks}
        bgColor="menu-drinks"
      />

      {/* Footer */}
      <MenuFooter />

      {/* Floating Order Button */}
      <OrderButton />
    </div>
  );
};

export default Index;
