import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroSectionProps {
  countdown: CountdownProps;
}

const HeroSection: React.FC<HeroSectionProps> = ({ countdown }) => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/img/f8bc60a4-74f2-49a0-b4ba-b16590e55cb2.jpg)' }}
      />
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="font-cormorant text-8xl md:text-9xl font-bold text-wedding-blue mb-4">
              Е & К
            </h1>
            <p className="font-open-sans text-xl text-gray-600 mb-2">приглашают вас на</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-gray-800">
              Свадебную церемонию
            </h2>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-xl">
            <p className="font-open-sans text-lg leading-relaxed text-gray-700">
              Дорогие друзья! Мы, <span className="font-semibold text-wedding-blue">Елизавета</span> и{' '}
              <span className="font-semibold text-wedding-blue">Константин</span>, счастливы пригласить вас 
              на самый важный день в нашей жизни – день нашей свадьбы! Мы с нетерпением ждем возможности 
              отпраздновать нашу любовь в кругу самых близких и дорогих людей.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
            {Object.entries(countdown).map(([unit, value], index) => (
              <div key={unit} className="bg-wedding-pink/20 rounded-xl p-4 animate-scale-in" 
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="font-cormorant text-3xl font-bold text-wedding-blue">{value}</div>
                <div className="font-open-sans text-sm text-gray-600 capitalize">
                  {unit === 'days' ? 'дней' : unit === 'hours' ? 'часов' : unit === 'minutes' ? 'минут' : 'секунд'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;