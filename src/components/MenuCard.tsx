import { Badge } from '@/components/ui/badge';
import { Star, Leaf, Award } from 'lucide-react';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
  isChefsPick?: boolean;
  isVegan?: boolean;
}

const MenuCard = ({ name, description, price, image, tags, isChefsPick, isVegan }: MenuCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-3xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-border/50">
      {/* Chef's Pick Badge */}
      {isChefsPick && (
        <div className="absolute -top-2 -right-2 bg-accent p-3 rounded-full shadow-soft">
          <Award size={16} className="text-accent-foreground" />
        </div>
      )}

      {/* Menu Item Image/Doodle */}
      <div className="relative mb-4 h-32 bg-muted/30 rounded-2xl flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl opacity-50">🍽️</div>
        )}
        
        {/* Vegan indicator */}
        {isVegan && (
          <div className="absolute top-2 left-2 bg-secondary p-1.5 rounded-full">
            <Leaf size={12} className="text-secondary-foreground" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-doodle font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed font-doodle">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs font-doodle rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-primary fill-primary" />
            <Star size={14} className="text-primary fill-primary" />
            <Star size={14} className="text-primary fill-primary" />
            <Star size={14} className="text-primary fill-primary" />
            <Star size={14} className="text-primary fill-primary" />
          </div>
          
          <span className="font-doodle font-bold text-xl text-primary">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;