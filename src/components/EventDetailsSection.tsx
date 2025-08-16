import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const EventDetailsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Date & Time */}
        <Card className="animate-fade-in border-wedding-blue/20 shadow-lg">
          <CardHeader className="bg-wedding-blue/10">
            <CardTitle className="font-cormorant text-2xl text-wedding-blue flex items-center gap-2">
              <Icon name="Calendar" size={24} />
              Дата и время
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="font-cormorant text-4xl font-bold text-wedding-blue mb-2">3 октября 2025</div>
                <div className="font-open-sans text-lg text-gray-600">Пятница</div>
              </div>
              
              {/* October Calendar */}
              <div className="mt-6">
                <h4 className="font-cormorant text-xl font-semibold text-center text-gray-800 mb-4">Октябрь 2025</h4>
                <div className="grid grid-cols-7 gap-1 max-w-xs mx-auto">
                  {/* Week days header */}
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                    <div key={day} className="text-center p-2 font-open-sans text-xs font-semibold text-gray-500">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar days */}
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1;
                    const dayOfWeek = new Date(2025, 9, day).getDay();
                    const adjustedDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                    
                    return (
                      <div
                        key={day}
                        className={`text-center p-2 font-open-sans text-sm rounded-lg transition-all ${
                          day === 3
                            ? 'bg-wedding-blue text-white font-bold ring-2 ring-wedding-pink shadow-lg transform scale-110'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={day === 1 ? { gridColumnStart: adjustedDayOfWeek + 1 } : {}}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="animate-fade-in border-wedding-pink/20 shadow-lg">
          <CardHeader className="bg-wedding-pink/10">
            <CardTitle className="font-cormorant text-2xl text-wedding-pink flex items-center gap-2">
              <Icon name="MapPin" size={24} />
              Место проведения
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-cormorant text-xl font-semibold text-gray-800">Durso Tower</h3>
                <p className="font-open-sans text-gray-600">
                  г. Новороссийск, хутор Дюрсо<br />
                  СНТ Форум, Южнобережная ул., 15
                </p>
              </div>
              
              {/* Venue Photo */}
              <div className="mt-4">
                <img 
                  src="https://cdn.poehali.dev/files/5ab587cb-f6e5-40b2-9c40-178dc937c057.jpeg"
                  alt="Durso Tower - место проведения свадьбы"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="font-open-sans text-xs text-gray-500 mt-2 text-center">
                  Durso Tower - ваше место для незабываемого праздника
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={() => window.open('https://yandex.ru/maps/?text=44.681852,37.567536&z=16', '_blank')}
                  className="w-full bg-wedding-pink hover:bg-wedding-pink/90 text-white font-open-sans"
                >
                  <Icon name="Navigation" className="mr-2" size={16} />
                  Построить маршрут на Яндекс.Картах
                </Button>
                
                <Button 
                  onClick={() => window.open('https://maps.google.com/?q=44.681852,37.567536', '_blank')}
                  variant="outline"
                  className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 font-open-sans"
                >
                  <Icon name="Map" className="mr-2" size={16} />
                  Открыть в Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Schedule */}
      <Card className="mb-16 animate-fade-in border-wedding-beige/30 shadow-lg">
        <CardHeader className="bg-wedding-beige/20">
          <CardTitle className="font-cormorant text-3xl text-center text-gray-800">
            Программа дня
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {[
              { time: '15:30', title: 'Сбор гостей', desc: 'Просим взять с собой хорошее настроение и свои улыбки – они станут лучшими украшениями для нашего праздника!' },
              { time: '16:00', title: 'Свадебная церемония', desc: 'В этот трогательный момент, когда наши сердца забьются в унисон, приготовьте носовые платочки – слезы счастья так прекрасны!' },
              { time: '17:00', title: 'Праздничный банкет', desc: 'Время вкусной еды, зажигательных танцев и незабываемых развлечений. Мы приготовили для вас много сюрпризов!' },
              { time: '23:00', title: 'Окончание мероприятия', desc: 'К сожалению, даже такой прекрасный вечер может подойти к концу, но воспоминания о нем останутся с нами навсегда.' }
            ].map((event, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-wedding-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-cormorant font-semibold text-lg flex-shrink-0">
                  {event.time}
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="font-open-sans text-gray-600 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dress Code */}
      <Card className="mb-16 animate-fade-in border-wedding-gold/30 shadow-lg">
        <CardHeader className="bg-wedding-gold/10">
          <CardTitle className="font-cormorant text-2xl text-gray-800 flex items-center gap-2">
            <Icon name="Shirt" size={24} />
            Дресс-код
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="font-open-sans text-gray-700 leading-relaxed mb-4">
            Для создания торжественной и гармоничной атмосферы, мы просим вас поддержать цветовую гамму нашего праздника.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-wedding-blue border-2 border-gray-300"></div>
              <span className="font-open-sans text-sm">Голубой</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-wedding-pink border-2 border-gray-300"></div>
              <span className="font-open-sans text-sm">Розовый</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-wedding-beige border-2 border-gray-300"></div>
              <span className="font-open-sans text-sm">Бежевый</span>
            </div>
          </div>
          <p className="font-open-sans text-sm text-gray-600 mt-4">
            Для мужчин также будут уместны черные костюмы.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetailsSection;