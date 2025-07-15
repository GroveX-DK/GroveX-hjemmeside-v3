import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import BookMeetingForm from '@/components/BookMeetingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceCards />
      <BookMeetingForm />
      <Footer />
    </div>
  );
};

export default Index;
