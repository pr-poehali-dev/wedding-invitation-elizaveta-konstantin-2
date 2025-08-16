import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({
    fullName: '',
    partnerName: '',
    attending: '',
    alcohol: '',
    food: '',
    transport: '',
    other: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    alert('Спасибо за ответ! Мы получили ваше подтверждение.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-blue/20 via-white to-wedding-pink/20">
      {/* Hero Section */}
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

            {/* Countdown Timer */}
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

      {/* Event Details */}
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

        {/* Interactive Map Section */}
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
                            Время в пути от центра Геленджика: ~20 минут<br />
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

        {/* RSVP Form */}
        <Card className="animate-fade-in border-wedding-blue/20 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-wedding-blue/10 to-wedding-pink/10">
            <CardTitle className="font-cormorant text-3xl text-center text-gray-800">
              Подтверждение участия
            </CardTitle>
            <p className="text-center font-open-sans text-gray-600 mt-2">
              Чтобы мы смогли лучше спланировать наш праздник, просим вас ответить на несколько вопросов
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Names */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="font-open-sans font-medium">Ваше ФИО</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="partnerName" className="font-open-sans font-medium">ФИО спутника/спутницы</Label>
                  <Input
                    id="partnerName"
                    value={formData.partnerName}
                    onChange={(e) => setFormData({...formData, partnerName: e.target.value})}
                    className="mt-1"
                    placeholder="Если придете парой"
                  />
                </div>
              </div>

              <Separator />

              {/* Attendance */}
              <div>
                <Label className="font-open-sans font-medium text-base">Планируете ли вы посетить наше торжество?</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => setFormData({...formData, attending: value})}
                  className="mt-2"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-open-sans">Да</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-open-sans">Нет</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Alcohol preference */}
              <div>
                <Label className="font-open-sans font-medium text-base">Какой алкогольный напиток предпочитаете на свадьбе?</Label>
                <RadioGroup
                  value={formData.alcohol}
                  onValueChange={(value) => setFormData({...formData, alcohol: value})}
                  className="mt-2 grid grid-cols-2 gap-2"
                >
                  {['Водка', 'Виски', 'Коньяк', 'Шампанское', 'Красное вино', 'Белое вино', 'Не буду пить алкогольные напитки'].map((drink) => (
                    <div key={drink} className="flex items-center space-x-2">
                      <RadioGroupItem value={drink} id={drink} />
                      <Label htmlFor={drink} className="font-open-sans text-sm">{drink}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator />

              {/* Food preference */}
              <div>
                <Label className="font-open-sans font-medium text-base">Что вы предпочитаете на второе?</Label>
                <RadioGroup
                  value={formData.food}
                  onValueChange={(value) => setFormData({...formData, food: value})}
                  className="mt-2"
                >
                  {['Блюдо из мяса', 'Блюдо из рыбы', 'Любое'].map((food) => (
                    <div key={food} className="flex items-center space-x-2">
                      <RadioGroupItem value={food} id={food} />
                      <Label htmlFor={food} className="font-open-sans">{food}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator />

              {/* Transport */}
              <div>
                <Label className="font-open-sans font-medium text-base">Как вы планируете добираться до места проведения торжества?</Label>
                <RadioGroup
                  value={formData.transport}
                  onValueChange={(value) => setFormData({...formData, transport: value})}
                  className="mt-2"
                >
                  {[
                    'Личный транспорт',
                    'Личный транспорт (готов(-а) взять попутчиков)',
                    'Такси',
                    'Пока не знаю'
                  ].map((transport) => (
                    <div key={transport} className="flex items-center space-x-2">
                      <RadioGroupItem value={transport} id={transport} />
                      <Label htmlFor={transport} className="font-open-sans">{transport}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Other comments */}
              <div>
                <Label htmlFor="other" className="font-open-sans font-medium">Дополнительные комментарии</Label>
                <Textarea
                  id="other"
                  value={formData.other}
                  onChange={(e) => setFormData({...formData, other: e.target.value})}
                  className="mt-1"
                  placeholder="Если у вас есть особые пожелания или вопросы..."
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-wedding-blue hover:bg-wedding-blue/90 text-white font-open-sans text-lg py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Отправить подтверждение
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
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
    </div>
  );
};

export default Index;