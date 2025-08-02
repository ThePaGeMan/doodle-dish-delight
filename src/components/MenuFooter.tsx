import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import decorationDoodles from '@/assets/decoration-doodles.png';

const MenuFooter = () => {
  return (
    <footer className="relative bg-gradient-hero py-16 overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-20 animate-bounce">
        <img src={decorationDoodles} alt="Decorative doodles" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 opacity-20 animate-pulse">
        <img src={decorationDoodles} alt="Decorative doodles" className="w-full h-full object-contain rotate-180" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hotel Name */}
          <h3 className="font-doodle text-3xl md:text-4xl font-bold text-foreground mb-8">
            Grand Doodle Hotel
          </h3>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Address */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Location</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                123 Culinary Street<br />
                Foodie District<br />
                Taste City, TC 12345
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Phone</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                Room Service: Ext. 1234<br />
                Reception: +1 (555) 123-4567<br />
                Restaurant: +1 (555) 123-4568
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Email</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                dining@granddoodle.com<br />
                info@granddoodle.com<br />
                events@granddoodle.com
              </p>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Instagram size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Follow Us</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                @granddoodlehotel<br />
                @doodledining<br />
                #DoodleDelicious
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card/20 rounded-3xl p-6 mb-8 backdrop-blur-sm">
            <h4 className="font-doodle font-semibold text-lg text-foreground mb-4">Restaurant Hours</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-doodle font-medium text-foreground">Breakfast</p>
                <p className="font-doodle text-muted-foreground">6:00 AM - 11:00 AM</p>
              </div>
              <div>
                <p className="font-doodle font-medium text-foreground">Lunch & Dinner</p>
                <p className="font-doodle text-muted-foreground">12:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-doodle font-medium text-foreground">Room Service</p>
                <p className="font-doodle text-muted-foreground">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/20 pt-6">
            <p className="font-doodle text-sm text-muted-foreground">
              © 2024 Grand Doodle Hotel. Made with ❤️ for food lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;