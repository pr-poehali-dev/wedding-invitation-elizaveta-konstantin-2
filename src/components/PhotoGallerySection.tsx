import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PhotoGallerySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Photo Gallery Section */}
      <Card className="mb-16 animate-fade-in border-wedding-pink/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-wedding-pink/10 to-wedding-blue/10">
          <CardTitle className="font-cormorant text-3xl text-center text-gray-800 flex items-center justify-center gap-2">
            <Icon name="Camera" size={32} />
            Наша история любви
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Photo 1 - Black and white romantic photo */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/1e73582e-ee36-4853-b40b-58b0cc213b6b.jpg"
                alt="Елизавета и Константин - романтический момент"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-cormorant text-lg font-semibold">Наши счастливые моменты</p>
                  <p className="font-open-sans text-sm">Каждый день вместе — это праздник</p>
                </div>
              </div>
            </div>

            {/* Photo 2 - Color couple selfie */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/53c4d8f7-b6a3-48d1-b713-94a93d0e740b.jpg"
                alt="Елизавета и Константин - селфи на природе"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-cormorant text-lg font-semibold">Вместе навсегда</p>
                  <p className="font-open-sans text-sm">Готовы начать новую главу жизни</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-wedding-beige/10 rounded-xl">
            <p className="font-cormorant text-xl text-gray-800 leading-relaxed">
              "Любовь не в том, чтобы смотреть друг на друга, 
              а в том, чтобы вместе смотреть в одном направлении"
            </p>
            <p className="font-open-sans text-sm text-gray-600 mt-2">— Антуан де Сент-Экзюпери</p>
          </div>
        </CardContent>
      </Card>

      {/* Flowers & Gifts Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Flowers */}
        <Card className="animate-fade-in border-wedding-pink/20 shadow-lg">
          <CardHeader className="bg-wedding-pink/10">
            <CardTitle className="font-cormorant text-2xl text-wedding-pink flex items-center gap-2">
              <Icon name="Flower" size={24} />
              О цветах
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="font-open-sans text-gray-700 leading-relaxed">
              Просим не обременять себя выбором цветов, 
              <span className="font-semibold text-wedding-pink"> Ваше присутствие скрасит этот день ярче любых букетов!</span>
            </p>
          </CardContent>
        </Card>

        {/* Gifts */}
        <Card className="animate-fade-in border-wedding-gold/30 shadow-lg">
          <CardHeader className="bg-wedding-gold/10">
            <CardTitle className="font-cormorant text-2xl text-gray-800 flex items-center gap-2">
              <Icon name="Gift" size={24} />
              О подарках
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="font-open-sans text-gray-700 leading-relaxed">
              Если хотите подарить нам ценный и нужный подарок, 
              <span className="font-semibold text-wedding-gold"> мы будем очень благодарны за вклад в бюджет нашей молодой семьи.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhotoGallerySection;