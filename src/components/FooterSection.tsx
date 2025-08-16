import React from 'react';
import Icon from '@/components/ui/icon';

const FooterSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-16 p-8">
        <div 
          className="relative rounded-2xl overflow-hidden mb-8"
          style={{ 
            backgroundImage: 'url(/img/8fcc01ef-d1fc-4abc-ac54-a5d8f73022b1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px'
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="font-cormorant text-3xl font-semibold mb-2">
                Будем очень рады разделить этот особенный день вместе с вами!
              </p>
              <p className="font-open-sans text-xl">
                С любовью, Елизавета и Константин ❤️
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-wedding-blue">
          <div className="text-center">
            <h4 className="font-cormorant text-xl font-semibold text-gray-800 mb-3">Контакты</h4>
            
            <div className="space-y-2">
              <div className="flex justify-center items-center gap-2">
                <Icon name="Phone" size={18} />
                <span className="font-open-sans font-medium">Елизавета:</span>
                <a href="tel:+79648989866" className="font-open-sans text-wedding-blue hover:underline">
                  +7 (964) 898-98-66
                </a>
              </div>
              
              <div className="flex justify-center items-center gap-2">
                <Icon name="Phone" size={18} />
                <span className="font-open-sans font-medium">Константин:</span>
                <a href="tel:+79615191651" className="font-open-sans text-wedding-blue hover:underline">
                  +7 (961) 519-16-51
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;