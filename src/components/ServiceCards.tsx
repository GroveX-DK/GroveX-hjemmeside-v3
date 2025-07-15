import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import restaurantAutomation from '@/assets/restaurant-automation.jpg';
import websiteDesign from '@/assets/website-design.jpg';
import digitalOrdering from '@/assets/digital-ordering.jpg';
import analyticsDashboard from '@/assets/analytics-dashboard.jpg';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      image: restaurantAutomation,
      alt: 'Restaurant Automation Systems'
    },
    {
      id: 2,
      image: websiteDesign,
      alt: 'Professional Website Design'
    },
    {
      id: 3,
      image: digitalOrdering,
      alt: 'Digital Ordering Solutions'
    },
    {
      id: 4,
      image: analyticsDashboard,
      alt: 'Analytics and Reporting'
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vores Løsninger
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi tilbyder skræddersyede teknologiløsninger, der transformerer din restaurantdrift
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group hover:shadow-card transition-all duration-300 animate-fade-in"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Text section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Textarea
                    placeholder="Tilføj beskrivelse af denne service..."
                    className="min-h-[240px] resize-none border-border/50 bg-background/80 focus:bg-background transition-colors text-lg leading-relaxed p-6 rounded-xl shadow-sm focus:shadow-md"
                  />
                </div>
                
                {/* Image section */}
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;