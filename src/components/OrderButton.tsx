import { useState } from 'react';
import { Bell, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const OrderButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Order Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-hover transition-all duration-300 hover:scale-110 z-50 p-0"
            size="lg"
          >
            <div className="relative">
              <Bell size={24} className="text-primary-foreground" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-md bg-card rounded-3xl border-2 border-border">
          <DialogHeader className="text-center">
            <DialogTitle className="font-doodle text-2xl text-foreground">
              Order to Your Room
            </DialogTitle>
            <DialogDescription className="font-doodle text-muted-foreground">
              Get delicious food delivered directly to your hotel room
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-6">
            {/* Call Room Service */}
            <Button 
              className="w-full h-14 rounded-2xl bg-gradient-hero font-doodle font-medium text-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                // Mock room service call
                alert('Connecting to room service...');
                setIsOpen(false);
              }}
            >
              <Phone size={20} className="mr-3" />
              Call Room Service
            </Button>
            
            {/* WhatsApp Order */}
            <Button 
              variant="outline"
              className="w-full h-14 rounded-2xl border-2 border-secondary bg-secondary/20 font-doodle font-medium text-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                // Mock WhatsApp order
                alert('Opening WhatsApp...');
                setIsOpen(false);
              }}
            >
              <MessageCircle size={20} className="mr-3" />
              Order via WhatsApp
            </Button>
            
            {/* Restaurant Visit */}
            <div className="text-center pt-4 border-t border-border">
              <p className="font-doodle text-sm text-muted-foreground mb-2">
                Or visit our restaurant
              </p>
              <p className="font-doodle text-foreground font-medium">
                📍 Main Floor, Lobby Level
              </p>
              <p className="font-doodle text-sm text-muted-foreground">
                Open daily: 6:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderButton;