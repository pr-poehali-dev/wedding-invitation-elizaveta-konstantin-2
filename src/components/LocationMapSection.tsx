import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const LocationMapSection: React.FC = () => {
  return (
    <Card className="mb-16 animate-fade-in border-wedding-blue/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-wedding-blue/10 to-wedding-pink/10">
        <CardTitle className="font-cormorant text-3xl text-center text-gray-800 flex items-center justify-center gap-2">
          <Icon name="MapPin" size={32} />
          Как добраться
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <div className="space-y-4">
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A44.681852%2C37.567536&amp;source=constructor"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Карта проезда к месту свадьбы"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={() => window.open('https://yandex.ru/maps/?text=44.681852,37.567536&z=16', '_blank')}
                className="bg-wedding-blue hover:bg-wedding-blue/90 text-white font-open-sans"
              >
                <Icon name="Navigation" className="mr-2" size={16} />
                Яндекс.Карты
              </Button>
              
              <Button 
                onClick={() => window.open('https://maps.google.com/?q=44.681852,37.567536', '_blank')}
                variant="outline"
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 font-open-sans"
              >
                <Icon name="Map" className="mr-2" size={16} />
                Google Maps
              </Button>
            </div>
          </div>

          {/* Travel info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-cormorant text-2xl font-semibold text-gray-800 mb-4">Информация о проезде</h3>
              
              <div className="space-y-4">
                <div className="bg-wedding-beige/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Car" className="text-wedding-blue mt-1" size={20} />
                    <div>
                      <h4 className="font-open-sans font-semibold text-gray-800">На автомобиле</h4>
                      <p className="font-open-sans text-sm text-gray-600 mt-1">
                        Время в пути от центра Новороссийска: ~15 минут<br />
                        Парковка на территории: бесплатная
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-wedding-pink/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-wedding-pink mt-1" size={20} />
                    <div>
                      <h4 className="font-open-sans font-semibold text-gray-800">Совместная поездка</h4>
                      <p className="font-open-sans text-sm text-gray-600 mt-1">
                        Если готовы взять попутчиков или ищете компанию для поездки — укажите в форме RSVP
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-wedding-blue/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-wedding-blue mt-1" size={20} />
                    <div>
                      <h4 className="font-open-sans font-semibold text-gray-800">Нужна помощь?</h4>
                      <p className="font-open-sans text-sm text-gray-600 mt-1">
                        Если потерялись или нужна помощь с дорогой:<br />
                        Елизавета: <span className="font-medium">+7 (964) 898-98-66</span><br />
                        Константин: <span className="font-medium">+7 (961) 519-16-51</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-wedding-gold pl-4">
              <p className="font-open-sans text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Важно:</span> Место проведения находится на территории частного комплекса. 
                Рекомендуем прибыть за 15-20 минут до начала церемонии для удобной парковки.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMapSection;