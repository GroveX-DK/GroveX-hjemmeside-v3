import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">RestaurantTech</h3>
            <p className="text-background/80 leading-relaxed">
              Vi hjælper restauranter med at automatisere deres processer og skabe professionelle hjemmesider. Vores mission er at gøre teknologi tilgængelig for alle restauranter.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-background/60 hover:text-primary transition-colors cursor-pointer hover:scale-110 transition-transform" />
              <Twitter className="h-6 w-6 text-background/60 hover:text-primary transition-colors cursor-pointer hover:scale-110 transition-transform" />
              <Instagram className="h-6 w-6 text-background/60 hover:text-primary transition-colors cursor-pointer hover:scale-110 transition-transform" />
              <Linkedin className="h-6 w-6 text-background/60 hover:text-primary transition-colors cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-background">Tjenester</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Professionelle Hjemmesider</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Restaurant Automatisering</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Digital Bestillingssystem</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Analytics & Rapportering</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">SEO Optimering</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">24/7 Support</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-background">Virksomhed</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Forside</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Om os</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Kontakt</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Portfolio</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Kundehistorier</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">Karriere</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-background">Kontakt os</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">info@restauranttech.dk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+45 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">København, Danmark</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">Man-Fre: 9:00-17:00</span>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-background/90 mb-3">Certificeret og sikker</h5>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs text-background/70">GDPR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs text-background/70">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 RestaurantTech. Alle rettigheder forbeholdes.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privatlivspolitik</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Vilkår & Betingelser</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;