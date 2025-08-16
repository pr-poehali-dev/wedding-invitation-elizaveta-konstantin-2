import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import LocationMapSection from '@/components/LocationMapSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import RSVPSection from '@/components/RSVPSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2025-10-03T16:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-blue/20 via-white to-wedding-pink/20">
      <HeroSection countdown={countdown} />
      <EventDetailsSection />
      <LocationMapSection />
      <PhotoGallerySection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
};

export default Index;