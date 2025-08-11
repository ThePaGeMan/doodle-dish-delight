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
            The Food Wagon Street
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
                Food Court, Patia<br />
                Bhubaneswar<br />
                Odisha, CC 751024
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Phone</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                Orders: +91 7681853408 <br />+91 9777887442<br /> 
                <a href="https://wa.me/+919777887442" target="_blank" rel="noopener noreferrer" className="font-doodle text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                  WhatsApp: +91 9777887442
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Email</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                <a href='mailto:tfoodwagon@gmail.com' className="font-doodle text-sm text-muted-foreground cursor-pointer hover:text-foreground">tfoodwagon@gmail.com</a>
              </p>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mx-auto mb-3">
                <Instagram size={20} className="text-primary" />
              </div>
              <h4 className="font-doodle font-semibold text-foreground">Follow Us</h4>
              <p className="font-doodle text-sm text-muted-foreground">
                <a href='https://www.instagram.com/the.food_wagon?igsh=Zjk3emkwMmFtOGh3' target='_blank' rel='noopener noreferrer' className="font-doodle text-sm text-muted-foreground cursor-pointer hover:text-foreground">@the.food_wagon</a><br />
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card/20 rounded-3xl p-6 mb-8 backdrop-blur-sm">
            <h4 className="font-doodle font-semibold text-lg text-foreground mb-4">Operating Hours</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-doodle font-medium text-foreground">Monday - Friday</p>
                <p className="font-doodle text-muted-foreground">12:30 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-doodle font-medium text-foreground">Saturday - Sunday</p>
                <p className="font-doodle text-muted-foreground">12:30 PM - 10:30 PM</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/20 pt-6">
            <p className="font-doodle text-sm text-muted-foreground">
              © 2025 The Food Wagon Stall. Made with ❤️ for street food lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;